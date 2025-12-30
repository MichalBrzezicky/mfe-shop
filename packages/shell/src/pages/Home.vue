<template>
  <div>
    <HeroSection />
  </div>
</template>
<script>
  import { defineAsyncComponent } from 'vue'
  import HeroSection from '../components/HeroSection.vue'

  const ProductsList = defineAsyncComponent(() => import('products/ProductsList'))
  const CartView = defineAsyncComponent(() => import('cart/CartView'))
  export default {
    name: 'Home',
    components: {
      HeroSection,
      ProductsList,
      CartView,
    },
  }
</script>
