import { createI18n } from 'vue-i18n'

import cs from '@shared/core/src/i18n/locales/cs.json'
import en from '@shared/core/src/i18n/locales/en.json'

const savedLocale = localStorage.getItem('locale') || 'cs'

export const i18n = createI18n({
  legacy: false, // Vue 3 + composition API
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    cs,
    en,
  },
})
