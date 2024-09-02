import CardList from './CardList'
import i18n from 'i18next'
import Container from '@/components/Container'
import Card from '@/components/EmergencyInfo/Card'

const EmergencyInfo = () => {
  const { t } = i18n

  return (
    <section>
      <Container className="flex flex-col gap-2 lg:gap-5">
        <CardList />
        <Card>
          <p className="text-center">{t('emergencyInfo.summary')}</p>
        </Card>
      </Container>
    </section>
  )
}

export default EmergencyInfo
