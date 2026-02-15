<template>
  <v-card :color="'#eff3ef'" class="ma-0 py-5" elevation="0" rounded="lg">
    <template v-slot:title>
      <v-row class="ma-0 pa-0">
        <v-col class="ma-0 pa-0 text-center" cols="12">
          <span class="text-h3 text-green-darken-4">{{ $t('shell.components.AboutUsArticle.title') }}</span>
        </v-col>
      </v-row>
    </template>
    <template v-slot:text>
      <v-row class="ma-0 pa-0 text-body-1">
        <v-col class="ma-0" cols="12" md="6" sm="7">
          <v-row class="ma-0 pa-0">
            <v-col class="ma-0" cols="12">
              <span>{{ $t('shell.components.AboutUsArticle.articles.article1') }}</span>
            </v-col>
            <v-col class="ma-0" cols="12">
              <span>{{ $t('shell.components.AboutUsArticle.articles.article2') }}</span>
            </v-col>
            <v-col class="ma-0" cols="12">
              <span>{{ $t('shell.components.AboutUsArticle.articles.article3') }}</span>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="mx-0 align-content-center" cols="12" md="6" sm="5">
          <v-img
            :src="indoorPlants"
            alt="Plants and shop"
            aria-label="Plants and shop"
            aspect-ratio="3/2"
            cover
            height="auto"
            max-height="400"
            position="top center"
            role="img"
            rounded="lg"
            width="100%"
          />
        </v-col>
      </v-row>
    </template>
  </v-card>
</template>

<script setup>
  import indoorPlants from '../assets/indoorPlants.png'
</script>
