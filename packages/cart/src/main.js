import { createApp } from 'vue'
import App from './App.vue'
import { useCartEventHandlers } from './integrations/cartEventHandlers.js'
const { pinia } = await import('shell/pinia.js')

const app = createApp(App)
app.use(pinia)


app.mount('#app')

const cartEventHandlers = useCartEventHandlers()
cartEventHandlers.register()

app.onUnmount(() => {
  cartEventHandlers.unregister()
})
