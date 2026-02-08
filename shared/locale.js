const STORAGE_KEY = 'locale'
const EVENT_NAME = 'app:locale-changed'

export function getLocale() {
  return localStorage.getItem(STORAGE_KEY) || 'cs'
}

export function setLocale(locale) {
  localStorage.setItem(STORAGE_KEY, locale)

  // 🔥 změna pro stejné okno
  window.dispatchEvent(
    new CustomEvent(EVENT_NAME, { detail: locale }),
  )
}

export function onLocaleChange(cb) {
  // stejné okno
  const handler = (e) => cb(e.detail)

  // jiné taby
  const storageHandler = (e) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      cb(e.newValue)
    }
  }

  window.addEventListener(EVENT_NAME, handler)
  window.addEventListener('storage', storageHandler)

  return () => {
    window.removeEventListener(EVENT_NAME, handler)
    window.removeEventListener('storage', storageHandler)
  }
}
