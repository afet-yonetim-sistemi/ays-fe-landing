import Main from '@/components/main'
import Hero from '@/components/Hero'
import EmergencyInfo from '../components/EmergencyInfo'
import AboutUs from '@/components/AboutUs'

const Home: React.FC = () => {
  return (
    <Main>
      <Hero />
      <EmergencyInfo />
      <AboutUs />
    </Main>
  )
}

export default Home
