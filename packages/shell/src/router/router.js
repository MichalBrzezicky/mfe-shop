import { createRouter, createWebHistory } from 'vue-router'

const ProductsPage = () => import('products/ProductsList')
const CartPage = () => import('cart/CartView')
// import Home from './views/Home.vue'

const routes = [
    // { path: '/', component: Home },
    { path: '/products', component: ProductsPage },
    { path: '/cart', component: CartPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
