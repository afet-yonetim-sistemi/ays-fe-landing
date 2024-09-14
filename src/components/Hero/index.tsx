import HeroCarousel from './HeroCarousel'
import Container from '@/components/Container'
import EmergencyForm from '@/components/EmergencyForm'
import nextConfig from '../../../next.config.mjs'

export default function HeroSection() {
  
  const showEmergency = nextConfig.env?.showEmergency === 'true'
  const contClassByConfig = showEmergency === true ? "grid grid-cols-1 lg:grid-cols-2 gap-5" : "grid grid-cols-1 lg:grid-cols-1 gap-5"

  return (
    <section className="w-full bg-green py-5 lg:px-5">
      <Container className={contClassByConfig}>
        <HeroCarousel />
        {showEmergency && <EmergencyForm />}
      </Container>
    </section>
  )
}
