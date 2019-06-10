import mask from './directive'
import tokens from './tokens'

function VeeMask(Vue) {
  Vue.directive('mask', mask)
}

export default VeeMask
export { mask, tokens }

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VeeMask)
}
