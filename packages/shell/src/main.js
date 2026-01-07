import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router.js'
import vuetify from './plugins/vuetify.js'
import { pinia } from './plugins/pinia.js'

const useEventHandlers = async function () {
  const { useCartEventHandlers } = await import('cart/cartEventHandlers')
  const { useProductEventHandlers } = await import('products/productEventHandlers')

  const cartEventHandlers = useCartEventHandlers()
  const productEventHandlers = useProductEventHandlers()

  return {
    register() {
      cartEventHandlers.register()
      productEventHandlers.register()
    },

    unregister() {
      cartEventHandlers.unregister()
      productEventHandlers.unregister()
    },
  }
}

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(pinia)

const eventHandlers = await useEventHandlers()
eventHandlers.register()

app.onUnmount(() => {
  eventHandlers.unregister()
})
app.mount('#app')
