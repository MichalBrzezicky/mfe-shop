<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn aria-label="Language" icon v-bind="props">
        {{ languageStore.locale.toUpperCase() }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="lang in languages"
        :key="lang.code"
        :active="languageStore.locale === lang.code"
        @click="changeLanguage(lang.code)"
      >
        <v-list-item-title>
          {{ $t(lang.label) }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
  import { useLanguageStore } from '../stores/languageStore.js'

  const languageStore = useLanguageStore()

  const languages = [
    { code: 'cs', label: 'shell.components.LanguageMenu.languages.cs' },
    { code: 'en', label: 'shell.components.LanguageMenu.languages.en' },
  ]

  function changeLanguage(lang) {
    languageStore.setLocale(lang)
  }
</script>
