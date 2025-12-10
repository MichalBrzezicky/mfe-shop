<template>
    <div>
        HOME PAGE
        <ProductsList />
        <CartView />
    </div>
</template>
<script>
    import { defineAsyncComponent } from 'vue'

    const ProductsList = defineAsyncComponent(() => import('products/ProductsList'))
    const CartView = defineAsyncComponent(() => import('cart/CartView'))
    export default {
        name: 'Home',
        components: {
            ProductsList,
            CartView,
        },
    }
</script>
