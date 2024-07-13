import HeaderTop from '@/components/Header/HeaderTop'
import HeaderNav from '@/components/Header/HeaderNav'
import Container from '@/components/Container'

export default function Header() {
  return <header className="w-full bg-nightBlue text-background">
    <Container className="space-y-4 py-5">
      <HeaderTop />
      <HeaderNav />
    </Container>
  </header>
}