<template>
  <div>
    <h2>Košík</h2>
    <p>Žádné položky</p>
  </div>
</template>

<script setup>
  // TODO remove init (its too late, when i on Home page or another then cart detail)
  import { useCartStore } from '../../stores/cartStore.js'
  const cartStore = useCartStore()
</script>
