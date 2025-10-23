<template>
    <div>
        <h1>Moje MFE e-shop aplikace</h1>
        <ProductsList />
        <CartView />
    </div>
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
