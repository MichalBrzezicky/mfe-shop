<template>
  <v-card
    v-if="product"
    :color="'#eff3ef'"
    class="py-5"
    elevation="0"
    rounded="lg"
    variant="flat"
  >
    <v-container class="px-0">

      <v-row>
        <!-- Image -->
        <v-col class="d-flex align-center justify-center" cols="12" md="5">
          <v-img
            :src="product.image"
            aspect-ratio="1"
            cover
            max-width="600"
            rounded="lg"
          />

          <v-row
            v-if="isOnSale || isNew"
            align="center"
            class="fill-height ma-0"
            justify="center"
            style="position: absolute; top: 40px; left: 40px; display: block"
          >
            <v-chip v-if="isOnSale" class="text-subtitle-1" color="red-lighten-1" variant="flat">
              {{ $t('products.components.ProductCard.chips.sale') }}
            </v-chip>
            <v-chip v-if="isNew" class="text-subtitle-1" color="green-lighten-1" variant="flat">
              {{ $t('products.components.ProductCard.chips.new') }}
            </v-chip>
          </v-row>
        </v-col>

        <!-- Detail -->
        <v-col class="px-10" cols="12" md="7">

          <h2 class="text-h4 mb-3">
            {{ product.title }}
          </h2>

          <p class="text-body-1 text-medium-emphasis mb-6">
            {{ product.description }}
          </p>

          <div class="mb-4">
          <span
            v-if="isOnSale"
            class="text-decoration-line-through text-medium-emphasis mr-3"
          >
            {{ formattedPrice }}
          </span>

            <span class="text-h5 font-weight-bold">
            {{ isOnSale ? formattedSalePrice : formattedPrice }}
          </span>
          </div>

          <v-btn
            block
            color="primary"
            size="large"
          >
            Add to cart
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
  import { computed, onUnmounted, ref } from 'vue'
  import { getLocale, onLocaleChange } from '@shared/core/locale.js'

  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  })

  const locale = ref(getLocale())

  const unsubscribe = onLocaleChange((newLocale) => {
    locale.value = newLocale
  })

  onUnmounted(() => {
    unsubscribe?.()
  })

  const isOnSale = computed(() => !!props.product.sale)
  const isNew = computed(() => !!props.product.isNew)

  const formattedPrice = computed(() => {
    return new Intl.NumberFormat(locale.value, {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 2,
    }).format(props.product.price)
  })

  const formattedSalePrice = computed(() => {
    if (!isOnSale.value) return null

    return new Intl.NumberFormat(locale.value, {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 2,
    }).format(props.product.sale)
  })
</script>
