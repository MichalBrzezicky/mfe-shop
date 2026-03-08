<template>
  <v-badge :content="totalCount" color="primary" overlap>
    <v-btn aria-label="Cart" icon @click="goToCartPage">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
  </v-badge>

  <v-menu
    v-if="$vuetify.display.mdAndUp"
    :close-on-content-click="false"
    activator="parent"
    location="bottom end"
    open-on-hover
    transition="scale-transition"
  >
    <CartPreview @open-cart-page="goToCartPage" />
  </v-menu>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCartStore } from '../stores/cartStore'
  import CartPreview from './CartPreview.vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const cartStore = useCartStore()
  const totalCount = computed(() => cartStore.totalCount)


  function goToCartPage() {
    router.push({ name: 'cart' })
  }
</script>
