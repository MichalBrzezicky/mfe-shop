import { defineStore } from 'pinia'
import { i18n } from '../i18n'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    locale: i18n.global.locale.value,
  }),

  actions: {
    setLocale(locale) {
      this.locale = locale
      i18n.global.locale.value = locale
      localStorage.setItem('locale', locale)
    },
  },
})
