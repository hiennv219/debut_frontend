export default {
  bind (el, binding) {
    if (typeof binding.value !== 'function') {
      const warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function`;
      console.warn(warn);
    }

    const handler = (e) => {
      if (!el.contains(e.target) && el !== e.target) {
        binding.value();
      }
    };
    el.__vueClickOutside__ = handler;

    // add Event Listeners
    document.addEventListener('click', handler);
  },

  unbind (el) {
    document.removeEventListener('click', el.__vueClickOutside__);
    el.__vueClickOutside__ = null;
  },
};
