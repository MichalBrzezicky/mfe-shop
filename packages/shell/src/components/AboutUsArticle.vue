<template>
  <!-- Hero -->
  <div class="hero-banner mb-8" :style="{ backgroundImage: `url(${plantsAtelier})` }">
    <div class="hero-overlay">
      <v-container class="fill-height">
        <v-row align="center" class="fill-height" style="min-height: 380px">
          <v-col cols="12" md="7">
            <h1 class="text-h3 font-weight-bold mb-3 text-white">
              {{ $t('shell.components.AboutUsArticle.title') }}
            </h1>
            <p class="text-h6 font-weight-regular text-white" style="opacity: 0.9">
              {{ $t('shell.components.AboutUsArticle.subtitle') }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>

  <!-- Mission -->
  <v-container class="mb-8">
    <v-row align="center">
      <v-col cols="12" md="6" class="pr-md-8">
        <p class="text-body-1 mb-4">{{ $t('shell.components.AboutUsArticle.articles.article1') }}</p>
        <p class="text-body-1 mb-4">{{ $t('shell.components.AboutUsArticle.articles.article2') }}</p>
        <p class="text-body-1">{{ $t('shell.components.AboutUsArticle.articles.article3') }}</p>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center justify-md-end">
        <v-img
          :src="indoorPlants"
          alt="PlantBase atelier"
          contain
          max-height="420"
          max-width="480"
          rounded="lg"
        />
      </v-col>
    </v-row>
  </v-container>

  <!-- Values -->
  <v-container>
    <v-row>
      <v-col
        v-for="value in values"
        :key="value.icon"
        cols="12"
        md="4"
      >
        <v-card color="#eff3ef" elevation="0" rounded="lg" class="pa-2 fill-height">
          <v-card-text class="text-center">
            <v-icon :icon="value.icon" color="green-darken-3" size="40" class="mb-3" />
            <h3 class="text-h6 font-weight-bold mb-2">
              {{ $t(`shell.components.AboutUsArticle.values.${value.key}.title`) }}
            </h3>
            <p class="text-body-2 text-medium-emphasis">
              {{ $t(`shell.components.AboutUsArticle.values.${value.key}.description`) }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import plantsAtelier from '../assets/plantsAtelier.png'
  import indoorPlants from '../assets/indoorPlants.png'

  const values = [
    { key: 'quality', icon: 'mdi-leaf' },
    { key: 'care', icon: 'mdi-account-heart-outline' },
    { key: 'sustainability', icon: 'mdi-earth' },
  ]
</script>

<style scoped>
  .hero-banner {
    border-radius: 12px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  .hero-overlay {
    background: linear-gradient(to right, rgba(22, 53, 40, 0.75) 40%, rgba(22, 53, 40, 0.1) 100%);
    width: 100%;
    height: 100%;
  }
</style>
