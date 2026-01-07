import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { useProductEventHandlers } from './integrations/productEventHandlers.js'
const { pinia } = await import('shell/pinia.js')

const app = createApp(App)

app.use(pinia)

const productEventHandlers = useProductEventHandlers()
productEventHandlers.register()
app.onUnmount(() => {
  productEventHandlers.unregister()
})

app.mount('#app')
