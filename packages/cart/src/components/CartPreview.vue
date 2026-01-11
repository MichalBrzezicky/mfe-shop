<template>
  <v-card
    elevation="8"
    width="450px"
  >
    <v-card-title class="d-flex justify-space-between align-center">
      <span>
        <v-icon size="x-small">mdi-cart</v-icon>
        Košík
      </span>
      <v-chip
        color="primary"
        size="small"
        variant="tonal"
      >
        {{ totalItems }} položek
      </v-chip>
    </v-card-title>

    <v-divider />

    <v-list density="compact">
      <v-list-item
        v-for="item in cartItems"
        :key="item.id"
        :prepend-avatar="item.image"
      >
        <!-- Přidat avatar pro obrázek a název -->
        <v-list-item-title class="d-flex justify-space-between">
          {{ item.title }}
          <strong>
            {{ formatPrice(item.price * item.quantity) }}
          </strong>
        </v-list-item-title>

        <v-list-item-subtitle class="d-flex justify-space-between">
          <span>× {{ item.quantity }}</span>
          <span>
            {{ formatPrice(item.price) }} za kus
          </span>
          <!-- Přidat jednotkovou cenu item.price -->
        </v-list-item-subtitle>
      </v-list-item>

      <v-list-item v-if="!cartItems.length" class="text-center text-medium-emphasis">
        Košík je prázdný
      </v-list-item>
    </v-list>

    <template v-if="cartItems.length > 0">
      <v-divider />

      <v-card-text class="d-flex justify-space-between text-h6 mx-2">
        <span>Celkem:</span>
        <strong>{{ formatPrice(totalPrice) }}</strong>
      </v-card-text>

      <v-card-actions class="text-end align-end">
        <v-btn
          block
          color="primary"
          width="200px"
          @click="emit('open-cart-page')"
        >
          Přejít do košíku
        </v-btn>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCartStore } from '../stores/cartStore.js'

  const cartStore = useCartStore()

  const cartItems = computed(() => cartStore.items)
  const totalItems = computed(() => cartStore.totalCount)
  const totalPrice = computed(() => cartStore.totalPrice)

  const emit = defineEmits(['open-cart-page'])

  function formatPrice(value) {
    return `${value.toLocaleString('cs-CZ')} Kč`
  }
</script>
