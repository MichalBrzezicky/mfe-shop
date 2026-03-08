<template>
  <div>
    <h2 class="text-h5 font-weight-medium mb-4">
      {{ $t('products.components.ProductDetail.faq.title') }}
    </h2>

    <v-expansion-panels variant="accordion">
      <v-expansion-panel
        v-for="i in 4"
        :key="i"
        :title="$t(`products.components.ProductDetail.faq.q${i}`)"
        :text="$t(`products.components.ProductDetail.faq.a${i}`)"
        elevation="0"
      />
    </v-expansion-panels>
  </div>
</template>
