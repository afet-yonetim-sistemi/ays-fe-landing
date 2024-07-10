import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import i18n from '@/i18n'
import { Providers } from '@/lib/providers'
import { Toaster } from '@/components/ui/toast/toaster'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: i18n.t('title'),
  description: i18n.t('description')
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={i18n.language}>
    <body className={inter.className}>
    <Providers>
      <Header />
      {children}
    </Providers>
    <Toaster />
    </body>
    </html>
  )
}
