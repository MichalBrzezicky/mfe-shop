import { useProductStore } from '../stores/productStore.js'

export function useProductEventHandlers() {
  return {
    register: () => {
      const productStore = useProductStore()

      // Example event handler registration
      // eventBus.on(...)
    },

    unregister: () => {
      // eventBus.off(...)
    },
  }
}
