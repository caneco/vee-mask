import dynamic from './masker-dynamic'
import regular from './masker-regular'

export default function (value, mask, masked = true, tokens = {}) {
  return Array.isArray(mask)
    ? dynamic(regular, mask, tokens)(value, mask, masked, tokens)
    : regular(value, mask, masked, tokens)
}
