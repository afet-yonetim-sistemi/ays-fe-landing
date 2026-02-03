'use client'

import { I18nextProvider } from 'react-i18next'

import i18n from '@/i18n'

export const Providers = (
  props: React.PropsWithChildren
): React.ReactElement => {
  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      {props.children}
    </I18nextProvider>
  )
}
