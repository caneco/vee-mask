import masker from './masker'
import tokens from './tokens'

function event (name) {
  let event = document.createEvent('Event')
  event.initEvent(name, true, true)
  return event
}

function isset (value) {
  return ! (value === undefined || value == null || value.length <= 0)
}

function solver (value) {
  let config = {
      mask: value,
      masked: true,
      tokens,
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return config
  }

  return {
    mask: value.mask || null,
    masked: isset(value.masked) ? value.masked : true,
    tokens: value.tokens || tokens,
  }
}

export default function (el, binding) {
  if (el.tagName.toUpperCase() !== 'INPUT') {
    throw new Error(`v-mask directive requires an input element, found: '${el.tagName}'`)
  }

  let config = solver(binding.value)

  if (!isset(config.mask) || !config.masked) {
    return // no mask given, no nothing
  }

  let display = masker(el.value, config.mask, config.masked, config.tokens)

  if (display !== el.value) {
    el.value = display
    el.dispatchEvent(event('input'))
  }

  el.oninput = function (ev) {
    if (!ev.isTrusted) return // avoid infinite loop (?)

    let posit = el.selectionEnd
    let digit = el.value[posit-1]
    el.value = masker(el.value, config.mask, config.masked, config.tokens)

    while (posit < el.value.length && el.value.charAt(posit-1) !== digit) {
      posit++
    }

    if (el === document.activeElement) {
      el.setSelectionRange(posit, posit)
      setTimeout(() => { el.setSelectionRange(posit, posit) }, 0)
    }

    el.dispatchEvent(event('input'))
  }
}
