<template>
  <div>
    <h1 class="font-weight-bold mb-1" :class="$vuetify.display.smAndDown ? 'text-h5' : 'text-h4'">{{ product.title }}</h1>

    <p v-if="product.latinName" class="text-body-1 text-medium-emphasis font-italic mb-4">
      {{ product.latinName }}
    </p>

    <v-divider class="mb-4" />

    <ProductDetailCareIcons v-if="product.care" :care="product.care" class="mb-4" />

    <v-divider class="mb-5" />

    <!-- Price -->
    <div class="mb-6">
      <div v-if="isOnSale" class="d-flex align-center flex-wrap" style="gap: 12px">
        <span class="text-h4 font-weight-bold text-primary">{{ formattedSalePrice }}</span>
        <span class="text-body-1 text-medium-emphasis text-decoration-line-through">
          {{ formattedPrice }}
        </span>
        <v-chip color="red-lighten-1" size="small" variant="flat">-{{ discountPercent }}%</v-chip>
      </div>
      <span v-else class="text-h4 font-weight-bold">{{ formattedPrice }}</span>
    </div>

    <!-- Quantity + Add to cart -->
    <v-row align="center" class="mb-4 flex-wrap" no-gutters>
      <v-col cols="auto" class="mr-3">
        <div class="quantity-control d-flex align-center">
          <v-btn density="compact" icon="mdi-minus" variant="outlined" @click="decrement" />
          <span class="quantity-value mx-4 text-body-1 font-weight-medium">{{ quantity }}</span>
          <v-btn density="compact" icon="mdi-plus" variant="outlined" @click="increment" />
        </div>
      </v-col>
      <v-col>
        <v-btn
          block
          color="primary"
          prepend-icon="mdi-cart-plus"
          size="large"
          @click="addToCart"
        >
          {{ $t('products.components.ProductDetail.actions.addToCart') }}
        </v-btn>
      </v-col>
    </v-row>

    <!-- Info labels -->
    <v-row class="mt-2" dense>
      <v-col cols="12">
        <div class="info-item mb-1">
          <v-icon class="mr-2" color="green-darken-1" icon="mdi-check-circle-outline" size="16" />
          <span class="text-caption">{{ $t('products.components.ProductDetail.labels.inStock') }}</span>
        </div>
        <div class="info-item mb-1">
          <v-icon class="mr-2" color="blue-darken-1" icon="mdi-truck-outline" size="16" />
          <span class="text-caption">{{ $t('products.components.ProductDetail.labels.freeShipping') }}</span>
        </div>
        <div class="info-item">
          <v-icon class="mr-2" color="grey-darken-1" icon="mdi-refresh" size="16" />
          <span class="text-caption">{{ $t('products.components.ProductDetail.labels.returnPolicy') }}</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import { computed, onUnmounted, ref } from 'vue'
  import { eventBus } from '@shared/core/eventBus'
  import { CART_EVENTS } from '@shared/core/events/CartEventsEnum.js'
  import { getLocale, onLocaleChange } from '@shared/core/locale.js'
  import ProductDetailCareIcons from './ProductDetailCareIcons.vue'

  const props = defineProps({
    product: { type: Object, required: true },
  })

  const quantity = ref(1)
  const locale = ref(getLocale())

  const unsubscribe = onLocaleChange((newLocale) => {
    locale.value = newLocale
  })

  onUnmounted(() => unsubscribe?.())

  const isOnSale = computed(() => !!props.product.sale)

  const formattedPrice = computed(() =>
    new Intl.NumberFormat(locale.value, {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 2,
    }).format(props.product.price),
  )

  const formattedSalePrice = computed(() => {
    if (!isOnSale.value) return null
    return new Intl.NumberFormat(locale.value, {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 2,
    }).format(props.product.sale)
  })

  const discountPercent = computed(() => {
    if (!isOnSale.value) return 0
    return Math.round((1 - props.product.sale / props.product.price) * 100)
  })

  function increment() {
    quantity.value++
  }

  function decrement() {
    if (quantity.value > 1) quantity.value--
  }

  function addToCart() {
    eventBus.emit(CART_EVENTS.ADD, { product: props.product, quantity: quantity.value })
  }
</script>

<style scoped>
  .quantity-control {
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    padding: 4px 8px;
  }

  .info-item {
    display: flex;
    align-items: center;
  }
</style>