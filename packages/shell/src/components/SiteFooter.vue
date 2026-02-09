<template>
  <v-footer class="bg-white" style="max-height: 250px">
    <v-container>
      <v-row>
        <!-- Brand -->
        <v-col cols="12" md="6">
          <v-row align="center" class="mb-2">
            <RouterLink aria-label="PlantBase home" to="/">
              <v-img
                :src="logo"
                alt="PlantBase"
                contain
                width="120"
              />
            </RouterLink>
          </v-row>

          <span class="text-body-2 text-medium-emphasis">
            {{ $t('shell.components.SiteFooter.title') }}
          </span>
        </v-col>

        <!-- Store section -->
        <v-col cols="6" md="3">
          <span class="text-subtitle-2 mb-2">
            {{ $t('shell.components.SiteFooter.sections.store.title') }}
          </span>

          <v-list class="ma-0 pa-0" density="compact">
            <v-list-item
              v-for="item in storeLinks"
              :key="item.label"
              :active="false"
              :to="item.to"
              class="ma-0 pa-0"
              variant="plain"
            >
              <v-list-item-title>
                {{ $t(item.label) }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Company section -->
        <v-col cols="6" md="3">
          <span class="text-subtitle-2 mb-2">
            {{ $t('shell.components.SiteFooter.sections.company.title') }}
          </span>

          <v-list class="ma-0 pa-0" density="compact">
            <v-list-item
              v-for="item in companyLinks"
              :key="item.label"
              :active="false"
              :to="item.to"
              class="ma-0 pa-0"
              variant="plain"
            >
              <v-list-item-title>
                {{ $t(item.label) }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Bottom -->
        <v-col class="text-center mt-6" cols="12">
          <span class="text-caption text-medium-emphasis">
            {{ $t('shell.components.SiteFooter.projectInfo') }}
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
  import logo from '../assets/logo.png'
  import { PRODUCT_FILTER } from '@shared/core/src/enums/productFilterEnum.js'

  const storeLinks = [
    {
      label: 'shell.components.SiteFooter.sections.store.links.indoorPlants',
      to: { path: '/products', query: { filter: PRODUCT_FILTER.ALL } },
    },
    {
      label: 'shell.components.SiteFooter.sections.store.links.newArrivals',
      to: { path: '/products', query: { filter: PRODUCT_FILTER.NEW } },
    },
    {
      label: 'shell.components.SiteFooter.sections.store.links.onSale',
      to: { path: '/products', query: { filter: PRODUCT_FILTER.SALE } },
    },
  ]

  const companyLinks = [
    {
      label: 'shell.components.SiteFooter.sections.company.links.aboutUs',
      to: '/about',
    },
    {
      label: 'shell.components.SiteFooter.sections.company.links.contact',
      to: '/contact',
    },
  ]
</script>
