<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn aria-label="Language" icon v-bind="props">
        {{ locale.toUpperCase() }}
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="lang in languages"
        :key="lang.code"
        :active="locale === lang.code"
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
  import { onMounted, onUnmounted, ref } from 'vue'
  import { getLocale, onLocaleChange, setLocale } from '@shared/core/locale'

  const locale = ref(getLocale())

  const languages = [
    { code: 'cs', label: 'shell.components.LanguageMenu.languages.cs' },
    { code: 'en', label: 'shell.components.LanguageMenu.languages.en' },
  ]

  function changeLanguage(lang) {
    setLocale(lang)
  }

  let unsubscribe

  onMounted(() => {
    unsubscribe = onLocaleChange((newLocale) => {
      locale.value = newLocale
    })
  })

  onUnmounted(() => {
    unsubscribe?.()
  })
</script>
