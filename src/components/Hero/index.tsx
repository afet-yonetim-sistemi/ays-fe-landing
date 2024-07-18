import HeroCarousel from './HeroCarousel'
import Container from '@/components/Container'
// import EmergencyForm from '@/components/EmergencyForm'

export default function HeroSection() {
  return <section className="w-full bg-green p-5">
    <Container className="grid grid-cols-1 gap-5">
      <HeroCarousel />
      {/*<EmergencyForm />*/}
      {/*TODO : AYS-333 ile birlikte EmergencyForm entegre edilecek*/}
    </Container>
  </section>
}