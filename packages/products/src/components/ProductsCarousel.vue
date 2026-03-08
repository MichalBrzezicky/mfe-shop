<template>
  <div>
    <h2 v-if="title" class="text-h5 my-4 mx-2">{{ title }}</h2>

    <div class="carousel-wrapper">
      <v-btn
        :disabled="isAtStart"
        class="carousel-arrow carousel-arrow--left"
        icon
        size="small"
        variant="elevated"
        @click="scrollBy(-1)"
      >
        <v-icon size="28">mdi-chevron-left</v-icon>
      </v-btn>

      <div ref="track" class="carousel-track">
        <div
          v-for="product in products"
          :key="product.id"
          class="carousel-item"
          @click="goToDetail(product.id)"
        >
          <div class="carousel-image-wrapper">
            <v-img
              :alt="product.title"
              :src="product.image"
              contain
              height="100%"
              width="100%"
            />
            <div v-if="product.sale || product.isNew" class="carousel-badges">
              <v-chip v-if="product.sale" color="red-lighten-1" size="small" variant="flat">
                {{ $t('products.components.ProductCard.chips.sale') }}
              </v-chip>
              <v-chip v-if="product.isNew" color="green-lighten-1" size="small" variant="flat">
                {{ $t('products.components.ProductCard.chips.new') }}
              </v-chip>
            </div>
          </div>

          <div class="carousel-info">
            <p class="text-body-2 font-weight-medium carousel-title">{{ product.title }}</p>
            <p class="text-body-2 font-weight-bold text-primary">
              {{ product.sale ? formatPrice(product.sale) : formatPrice(product.price) }}
            </p>
          </div>
        </div>
      </div>

      <v-btn
        :disabled="isAtEnd"
        class="carousel-arrow carousel-arrow--right"
        icon
        size="small"
        variant="elevated"
        @click="scrollBy(1)"
      >
        <v-icon size="28">mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup>
  import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { getLocale, onLocaleChange } from '@shared/core/locale.js'

  const props = defineProps({
    title: { type: String, default: null },
    products: { type: Array, required: true },
  })

  const router = useRouter()
  const locale = ref(getLocale())
  const track = ref(null)
  const isAtStart = ref(true)
  const isAtEnd = ref(false)

  const ITEM_WIDTH = 272 // 240px circle + 32px gap

  const unsubscribeLocale = onLocaleChange((newLocale) => {
    locale.value = newLocale
  })

  watch(() => props.products, async () => {
    await nextTick()
    updateArrows()
  })

  onMounted(() => {
    track.value?.addEventListener('scroll', updateArrows, { passive: true })
    updateArrows()
  })

  onUnmounted(() => {
    track.value?.removeEventListener('scroll', updateArrows)
    unsubscribeLocale?.()
  })

  function updateArrows() {
    if (!track.value) return
    const { scrollLeft, scrollWidth, clientWidth } = track.value
    isAtStart.value = scrollLeft <= 0
    isAtEnd.value = scrollLeft + clientWidth >= scrollWidth - 1
  }

  function scrollBy(direction) {
    track.value?.scrollBy({ left: direction * ITEM_WIDTH, behavior: 'smooth' })
  }

  function formatPrice(value) {
    return new Intl.NumberFormat(locale.value, {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 2,
    }).format(value)
  }

  function goToDetail(id) {
    router.push({ name: 'product-detail', params: { id } })
  }
</script>

<style scoped>
  .carousel-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .carousel-track {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    justify-content: safe center;
    gap: 32px;
    padding: 16px 8px;
    flex: 1;
    scrollbar-width: none;
  }

  .carousel-track::-webkit-scrollbar {
    display: none;
  }

  .carousel-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
  }

  .carousel-image-wrapper {
    position: relative;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #f1f1f1;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .carousel-item:hover .carousel-image-wrapper {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.10) !important;
  }

  .carousel-badges {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 4px;
    white-space: nowrap;
  }

  .carousel-info {
    width: 240px;
    text-align: center;
    margin-top: 10px;
  }

  .carousel-title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.3;
  }

  .carousel-arrow {
    flex-shrink: 0;
    z-index: 1;
  }

  .carousel-arrow--left {
    margin-right: 4px;
  }

  .carousel-arrow--right {
    margin-left: 4px;
  }
</style>
