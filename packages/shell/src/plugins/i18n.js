import cs from '@shared/core/src/i18n/locales/cs.json'
import en from '@shared/core/src/i18n/locales/en.json'
import { createI18n } from 'vue-i18n'
import { getLocale, onLocaleChange } from '@shared/core/locale'

export const i18n = createI18n({
  legacy: false, // Vue 3 + composition API
  locale: getLocale(),
  fallbackLocale: 'en',
  messages: {
    cs,
    en,
  },
})

onLocaleChange(locale => {
  i18n.global.locale.value = locale
})
