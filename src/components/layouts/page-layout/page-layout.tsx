import { Footer } from '@/components/layouts/footer/footer'
import { Header } from '@/components/layouts/header/header'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout = ({
  children,
}: PageLayoutProps): React.ReactElement => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
