export const eventBus = {
  emit(event, payload) {
    window.dispatchEvent(
      new CustomEvent(event, { detail: payload }),
    )
  },

  on(event, handler) {
    window.addEventListener(event, handler)
    return () => {
      window.removeEventListener(event, handler)
    }
  },
}
