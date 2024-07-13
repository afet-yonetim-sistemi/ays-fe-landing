import CardList from './CardList'
import i18n from 'i18next'
import Container from '@/components/Container'

const EmergencyInfo = () => {
  const { t } = i18n

  return (
    <section>
      <Container className="text-background flex flex-col gap-5">
        <CardList />
        <article className="bg-nightBlue rounded-lg text-3xl font-medium text-center p-5 py-10">
          <p>{t('emergencyInfo.summary')}</p>
        </article>
      </Container>
    </section>
  )
}

export default EmergencyInfo
