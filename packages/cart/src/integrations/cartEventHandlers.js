import { useCartStore } from '../stores/cartStore.js'
import { eventBus } from '@shared/core/eventBus.js'
import { CART_EVENTS } from '@shared/core/events/CartEventsEnum.js'

export function useCartEventHandlers() {
  return {
    register: () => {
      const cartStore = useCartStore()

      const onAddToCart = (e) => {
        cartStore.addProduct(e.detail.product)
      }
      const onRemoveFromCart = (e) => {
        cartStore.removeProduct(e.detail.productId)
      }
      const onClearCart = () => {
        cartStore.clearCart()
      }

      eventBus.on(CART_EVENTS.ADD, onAddToCart)
      eventBus.on(CART_EVENTS.REMOVE, onRemoveFromCart)
      eventBus.on(CART_EVENTS.CLEAR, onClearCart)
    },

    unregister: () => {
      eventBus.off(CART_EVENTS.ADD)
      eventBus.off(CART_EVENTS.REMOVE)
      eventBus.off(CART_EVENTS.CLEAR)
    },
  }
}
