import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const ProductsPage = () => import('products/ProductsPage')
const ProductDetailPage = () => import('products/ProductDetailPage')
const CartPage = () => import('cart/CartView')

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: ProductsPage },
    { path: '/products/:id', component: ProductDetailPage },
    { path: '/cart', component: CartPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
