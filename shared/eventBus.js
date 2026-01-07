export const eventBus = {
  emit(event, payload) {
    window.dispatchEvent(
      new CustomEvent(event, { detail: payload }),
    )
  },

  on(event, handler) {
    window.addEventListener(event, handler)
  },

  off(event, handler) {
    window.removeEventListener(event, handler)
  },
}
