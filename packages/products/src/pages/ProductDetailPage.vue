<template>
  <v-card>
    <v-card-title>Produkt #ID</v-card-title>
    <v-card-text>TEST</v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: 'ProductDetailPage',
    data() {
      return {
        products: [
          { id: 1, name: 'Produkt A' },
          { id: 2, name: 'Produkt B' },
          { id: 3, name: 'Produkt C' },
        ],
      }
    },
  }
</script>
