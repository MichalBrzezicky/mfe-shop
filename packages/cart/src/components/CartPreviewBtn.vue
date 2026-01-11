<template>
  <v-menu
    :close-on-content-click="false"
    location="bottom end"
    open-on-hover
    transition="scale-transition"
  >
    <template #activator="{ props }">
      <v-badge
        :content="totalCount"
        color="primary"
        overlap
      >
        <v-btn
          aria-label="Cart"
          icon
          v-bind="props"
          @click="goToCartPage"
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>
    </template>

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
