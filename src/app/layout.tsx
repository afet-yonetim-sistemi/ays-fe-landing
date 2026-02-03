import type { Metadata } from 'next'
import { Geist } from 'next/font/google'

import { AppShell } from '@/components/layouts/app-shell/app-shell'
import i18n from '@/i18n'

import './globals.css'

const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: i18n.t('title'),
  description: i18n.t('description'),
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html
      lang={i18n.language}
      suppressHydrationWarning
      className={geist.className}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}

export default RootLayout
