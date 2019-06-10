export default function (maskit, masks, tokens) {
  masks = masks.slice().sort((a, b) => a.length - b.length)

  return function (value, mask, masked = true) {
    let i = 0
    while (i < masks.length) {
      let currMask = masks[i]
      i++
      let nextMask = masks[i]
      if (!(nextMask && maskit(value, nextMask, true, tokens).length > currMask.length)) {
        return maskit(value, currMask, masked, tokens)
      }
    }
    return ''
  }
}
