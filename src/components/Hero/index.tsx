import HeroCarousel from './HeroCarousel'
import EmergencyForm from './EmergencyForm'

export default function HeroSection() {
  return <section className="grid grid-cols-1 lg:grid-cols-2 w-full">
    <HeroCarousel />
    <EmergencyForm />
  </section>
}