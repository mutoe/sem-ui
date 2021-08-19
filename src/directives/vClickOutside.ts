import { Directive } from 'vue'

const vClickOutside: Directive = {
  mounted(el, binding) {
    el.__vClickOutside = function (e: Event) {
      const target = e.target as HTMLElement
      if (el === target || el.contains(target)) {
        return false
      }
      if (typeof binding.value === 'function') {
        binding.value(e)
      }
    }

    setTimeout(() => {
      document.body.addEventListener('click', el.__vClickOutside)
    })
  },

  beforeUnmount(el) {
    document.body.removeEventListener('click', el.__vClickOutside)
  },
}

export default vClickOutside
