import type { InitOptions } from 'i18next'
import { resources } from './resources'

export const i18nConfig: InitOptions = {
  resources,
  fallbackLng: 'tr',
  lng: 'tr',
  defaultNS: 'common',
  ns: ['common'],
  interpolation: {
    escapeValue: false,
  },
  debug: process.env.NODE_ENV === 'development',
}
