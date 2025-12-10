<template>
    <header>
        <h1>My MFE Shop</h1>
    </header>

    <main>
        <router-view />
        <ProductsList />
        <CartView />
    </main>

    <footer>
        <p>© 2025 My MFE Shop</p>
    </footer>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const ProductsList = defineAsyncComponent(() => import('products/ProductsList'));
const CartView = defineAsyncComponent(() => import('cart/CartView'));

export default {
    name: 'App',
    components: {
        ProductsList,
        CartView,
    }
};
</script>
