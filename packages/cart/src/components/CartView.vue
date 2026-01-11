<template>
  <v-container>
    <v-row justify="center">
      <v-col class="pa-0 ma-0" cols="12">
        <div class="d-flex mb-4 mx-2 align-center">
            <span class="text-h5">
              Nákupní košík
            </span>

          <v-chip
            class="mx-2"
            color="primary"
            size="small"
            variant="tonal"
          >
            {{ totalItems }} položek
          </v-chip>
        </div>

        <v-card
          :color="'#f1f1f1'"
          class="my-4"
          elevation="0"
          rounded="lg"
          variant="flat"
        >
          <!-- Seznam položek -->
          <v-list v-if="cartItems.length" density="comfortable">
            <v-list-item
              v-for="item in cartItems"
              :key="item.id"
              :prepend-avatar="item.image"
            >
              <v-list-item-title class="d-flex justify-space-between">
                {{ item.title }}
                <strong class="pr-2">
                  {{ formatPrice(item.price * item.quantity) }}
                </strong>
              </v-list-item-title>

              <v-list-item-subtitle class="d-flex justify-space-between align-center">
                <span>
                  {{ formatPrice(item.price) }} za kus
                </span>

                <div class="d-flex align-center">
                  <v-btn
                    icon
                    size="x-small"
                    variant="text"
                    @click="decrease(item.id)"
                  >
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>

                  <span class="mx-2">
                    {{ item.quantity }}
                  </span>

                  <v-btn
                    icon
                    size="x-small"
                    variant="text"
                    @click="increase(item)"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>

          <v-card-text
            v-else
            class="text-center text-medium-emphasis py-8"
          >
            Košík je prázdný
          </v-card-text>

          <template v-if="cartItems.length">
            <v-divider />

            <v-card-text class="d-flex justify-space-between text-h6 mx-3">
              <span>Celkem:</span>
              <strong>{{ formatPrice(totalPrice) }}</strong>
            </v-card-text>

            <v-card-actions class="justify-space-between px-4 pb-4">
              <v-btn
                color="secondary"
                variant="text"
                @click="clearCart"
              >
                Vyprázdnit košík
              </v-btn>

              <v-btn
                color="primary"
                size="large"
              >
                Pokračovat k objednávce
              </v-btn>
            </v-card-actions>
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { computed } from 'vue'
  import { useCartStore } from '../stores/cartStore.js'

  const cartStore = useCartStore()

  const cartItems = computed(() => cartStore.items)
  const totalItems = computed(() => cartStore.totalCount)
  const totalPrice = computed(() => cartStore.totalPrice)

  function increase(product) {
    cartStore.addProduct(product)
  }

  function decrease(productId) {
    cartStore.removeProduct(productId)
  }

  function clearCart() {
    cartStore.clearCart()
  }

  function formatPrice(value) {
    return `${value.toLocaleString('cs-CZ')} Kč`
  }
</script>
