import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import ContactPage from '../pages/ContactPage.vue'
import AboutUsPage from '../pages/AboutUsPage.vue'

const ProductsPage = () => import('products/ProductsPage')
const ProductDetailPage = () => import('products/ProductDetailPage')
const CartPage = () => import('cart/CartView')

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'products', path: '/products', component: ProductsPage },
  { name: 'product-detail', path: '/products/:id', component: ProductDetailPage },
  { name: 'cart', path: '/cart', component: CartPage },
  { name: 'contact', path: '/contact', component: ContactPage },
  { name: 'about', path: '/about', component: AboutUsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
