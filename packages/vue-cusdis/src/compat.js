/**
 * compatible render for vue 2 and 3
 * @param {function} h the render function Vue 3 should provide
 */
export default function renderSix(renderer) {
  return function(h) {
    if (typeof h === 'function') {
      return function() {
        return renderer.call(this, h)
      }
    }
    return function(h) {
      return renderer.call(this, function(name, attrs, children) {
        return h(name, { attrs }, children)
      })
    }
  }
}
