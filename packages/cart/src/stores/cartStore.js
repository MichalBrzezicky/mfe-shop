import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const totalCount = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0),
  )

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
  )

  function addProduct(product) {
    const existing = items.value.find(p => p.id === product.id)

    console.log('Add product called with:', product)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({
        ...product,
        quantity: 1,
      })
    }
  }

  function removeProduct(productId) {
    const index = items.value.findIndex(p => p.id === productId)
    if (index === -1) return

    const item = items.value[index]
    item.quantity--

    if (item.quantity <= 0) {
      items.value.splice(index, 1)
    }
  }

  function clearCart() {
    items.value = []
  }

  function handleAddToCart(event) {
    console.log(event, 'event in cart store')
    addProduct(event.detail)
  }

  function handleRemoveFromCart(event) {
    removeProduct(event.detail.id)
  }

  // 👇 INIT LOGIC – SPUSTÍ SE JEDNOU
  console.log('cart store initialized')

  return {
    items,
    totalCount,
    totalPrice,
    addProduct,
    removeProduct,
    clearCart,
  }
})
