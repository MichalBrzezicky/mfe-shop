import { createI18n } from 'vue-i18n'

import cs from '@shared/core/src/i18n/locales/cs.json'
import en from '@shared/core/src/i18n/locales/en.json'

export const i18n = createI18n({
  legacy: false, // Vue 3 + composition API
  locale: 'cs',
  fallbackLocale: 'en',
  messages: {
    cs,
    en,
  },
})
