import type { Metadata } from 'next'
import './globals.css'
import i18n from '@/i18n'
import { Providers } from '@/lib/providers'
import { Toaster } from '@/components/ui/toast/toaster'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import { nato } from '@/styles/fonts'

export const metadata: Metadata = {
  title: i18n.t('title'),
  description: i18n.t('description'),
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export default RootLayout
