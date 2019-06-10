export default function (value = '', mask = '', masked = true, tokens = {}) {
  let i = 0, j = 0
  var output = '', restOutput = ''
  var cMask = ''
  while (i < mask.length && j < value.length) {
    cMask = mask[i]
    var masker = tokens[cMask]
    var cValue = value[j]
    if (masker && !masker.escape) {
      if (masker.rule.test(cValue)) {
        output += masker.mutate ? masker.mutate(cValue) : cValue
        i++
      }
      j++
    } else {
      if (masker && masker.escape) {
        i++
        cMask = mask[i]
      }
      if (masked) output += cMask
      if (cValue === cMask) j++
      i++
    }
  }

  while (i < mask.length && masked) {
    cMask = mask[i]
    if (tokens[cMask]) {
      restOutput = ''
      break
    }
    restOutput += cMask
    i++
  }

  return output + restOutput
}
