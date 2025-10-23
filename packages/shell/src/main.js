import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { loadRemote } from '@module-federation/enhanced/runtime';

loadRemote('products');
loadRemote('cart');

createApp(App).mount('#app')
