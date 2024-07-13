import Main from '@/components/main'
import Hero from '@/components/Hero'
import EmergencyInfo from '../components/EmergencyInfo'
import AboutUs from '@/components/AboutUs'

export default function Home() {
  return (
    <Main>
      <Hero />
      <EmergencyInfo />
      <AboutUs />
    </Main>
  )
}
