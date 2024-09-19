import HeroCarousel from './HeroCarousel'
import Container from '@/components/Container'
import EmergencyForm from '@/components/EmergencyForm'

const HeroSection: React.FC = () => {
  const showEmergencyForm = !process.env.NEXT_PUBLIC_ENVIRONMENT

  return (
    <section className="w-full bg-green py-5 lg:px-5">
      <Container
        className={`grid gap-5 grid-cols-1 ${
          showEmergencyForm ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
        }`}
      >
        <HeroCarousel />
        {showEmergencyForm && <EmergencyForm />}
      </Container>
    </section>
  )
}

export default HeroSection
