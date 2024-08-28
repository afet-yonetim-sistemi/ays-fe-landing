import HeroCarousel from './HeroCarousel'
import Container from '@/components/Container'
import EmergencyForm from '@/components/EmergencyForm'

export default function HeroSection() {
  return (
    <section className="w-full bg-green py-5 lg:px-5">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <HeroCarousel />
        <EmergencyForm />
      </Container>
    </section>
  )
}
