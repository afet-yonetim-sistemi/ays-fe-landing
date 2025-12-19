import commonEN from './modules/common/en.json'
import commonTR from './modules/common/tr.json'

export const resources = {
  tr: {
    common: commonTR,
  },
  en: {
    common: commonEN,
  },
} as const

export type AppLanguages = keyof typeof resources
