<template>
  <v-card
    elevation="8"
    width="450px"
  >
    <v-card-title class="d-flex justify-space-between align-center">
      <span>
        <v-icon size="x-small">mdi-cart</v-icon>
        {{ $t('cart.components.CartPreview.title') }}
      </span>
      <v-chip
        color="primary"
        size="small"
        variant="tonal"
      >
        {{ $t('cart.components.CartPreview.labels.items', { count: totalItems }) }}
      </v-chip>
    </v-card-title>

    <v-divider />

    <v-list density="compact">
      <v-list-item
        v-for="item in cartItems"
        :key="item.id"
        :prepend-avatar="item.image"
      >
        <v-list-item-title class="d-flex justify-space-between">
          {{ item.title }}
          <strong>
            {{ formatPrice((item.sale || item.price) * item.quantity) }}
          </strong>
        </v-list-item-title>

        <v-list-item-subtitle class="d-flex justify-space-between">
          <span>× {{ item.quantity }}</span>
          <span>
            {{ $t('cart.components.CartPreview.labels.pricePerItem', { price: formatPrice(item.sale || item.price) }) }}
          </span>
        </v-list-item-subtitle>
      </v-list-item>

      <v-list-item v-if="!cartItems.length" class="text-center text-medium-emphasis">
        {{ $t('cart.components.CartPreview.labels.empty') }}
      </v-list-item>
    </v-list>

    <template v-if="!isCartEmpty">
      <v-divider />

      <v-card-text class="d-flex justify-space-between text-h6 mx-2">
        <span>{{ $t('cart.components.CartPreview.labels.summary') }}</span>
        <strong>{{ formatPrice(totalPrice) }}</strong>
      </v-card-text>

      <v-card-actions class="text-end align-end">
        <v-btn
          block
          color="primary"
          width="200px"
          @click="emit('open-cart-page')"
        >
          {{ $t('cart.components.CartPreview.labels.detail') }}
        </v-btn>
      </v-card-actions>
    </template>
  </v-card>
</template>

<script setup>
  import { computed, onUnmounted, ref } from 'vue'
  import { useCartStore } from '../stores/cartStore.js'
  import { getLocale, onLocaleChange } from '@shared/core/locale.js'

  const cartStore = useCartStore()

  const cartItems = computed(() => cartStore.items)
  const totalItems = computed(() => cartStore.totalCount)
  const totalPrice = computed(() => cartStore.totalPrice)
  const isCartEmpty = computed(() => cartStore.totalCount === 0)

  const emit = defineEmits(['open-cart-page'])

  const locale = ref(getLocale())

  const unsubscribe = onLocaleChange((newLocale) => {
    locale.value = newLocale
  })

  onUnmounted(() => {
    unsubscribe?.()
  })

  function formatPrice(value) {
    return new Intl.NumberFormat(locale.value, {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 2,
    }).format(value)
  }
</script>
