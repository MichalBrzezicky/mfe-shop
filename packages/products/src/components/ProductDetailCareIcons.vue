<template>
  <v-row dense>
    <v-col cols="6">
      <div class="care-item">
        <v-icon class="mr-2" color="amber-darken-2" icon="mdi-white-balance-sunny" size="20" />
        <span class="text-body-2">
          {{ $t(`products.components.ProductDetail.care.light.${care.light}`) }}
        </span>
      </div>
    </v-col>

    <v-col cols="6">
      <div class="care-item">
        <v-icon
          :color="care.petFriendly ? 'green-darken-1' : 'red-darken-1'"
          :icon="care.petFriendly ? 'mdi-paw' : 'mdi-paw-off'"
          class="mr-2"
          size="20"
        />
        <span class="text-body-2">
          {{
            care.petFriendly
              ? $t('products.components.ProductDetail.care.petFriendly.yes')
              : $t('products.components.ProductDetail.care.petFriendly.no')
          }}
        </span>
      </div>
    </v-col>

    <v-col cols="6">
      <div class="care-item">
        <v-icon class="mr-2" color="blue-darken-1" icon="mdi-water-outline" size="20" />
        <span class="text-body-2">
          {{ $t(`products.components.ProductDetail.care.water.${care.water}`) }}
        </span>
      </div>
    </v-col>

    <v-col cols="6">
      <div class="care-item">
        <v-icon class="mr-2" color="grey-darken-1" icon="mdi-arrow-up-down" size="20" />
        <span class="text-body-2">{{ care.height }}</span>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
  defineProps({
    care: { type: Object, required: true },
  })
</script>

<style scoped>
  .care-item {
    display: flex;
    align-items: center;
    padding: 6px 0;
  }
</style>