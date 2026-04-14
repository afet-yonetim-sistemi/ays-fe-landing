'use client'

import { I18nProvider } from '@providers/i18n-provider/i18n-provider'
import { ThemeProvider } from '@providers/theme-provider/theme-provider'

export const AppProviders = (
  props: React.PropsWithChildren
): React.ReactElement => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProvider>{props.children}</I18nProvider>
    </ThemeProvider>
  )
}
