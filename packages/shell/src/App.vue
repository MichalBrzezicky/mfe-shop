<template>
    <div>
        <h1>Moje MFE e-shop aplikace</h1>
        <ProductsList />
        <CartView />
    </div>
</template>

<script>
import ProductsList from 'products/ProductsList';
import CartView from 'cart/CartView';

export default {
    name: 'App',
    components: {
        ProductsList,
        CartView,
    }
};
</script>
