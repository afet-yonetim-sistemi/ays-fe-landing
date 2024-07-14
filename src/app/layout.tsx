import type { Metadata } from 'next'
import { Noto_Sans_Anatolian_Hieroglyphs as Nato } from 'next/font/google'
import './globals.css'
import i18n from '@/i18n'
import { Providers } from '@/lib/providers'
import { Toaster } from '@/components/ui/toast/toaster'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'

const nato = Nato({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: i18n.t('title'),
  description: i18n.t('description')
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={i18n.language} suppressHydrationWarning>
    <body className={nato.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Providers>
        <Header />
        {children}
        <Footer />
      </Providers>
    </ThemeProvider>
    <Toaster />
    </body>
    </html>
  )
}
