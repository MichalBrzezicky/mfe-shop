import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const ProductsPage = () => import('products/ProductsPage')
const ProductDetailPage = () => import('products/ProductDetailPage')
const CartPage = () => import('cart/CartView')

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'products', path: '/products', component: ProductsPage },
  { name: 'product-detail', path: '/products/:id', component: ProductDetailPage },
  { name: 'cart', path: '/cart', component: CartPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
