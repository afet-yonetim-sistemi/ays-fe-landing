import Container from '@/components/Container'
import i18n from 'i18next'

const AboutUs: React.FC = () => {
  const { t } = i18n

  return (
    <section className="bg-green w-full py-10">
      <Container className="space-y-5">
        <h2 className="font-bold text-4xl md:text-5xl text-center">
          {t('aboutUs.title')}
        </h2>
        <div className="font-medium text-md md:text-xl space-y-5 text-center lg:text-start">
          <p>{t('aboutUs.description1')}</p>
          <p>{t('aboutUs.description2')}</p>
        </div>
      </Container>
    </section>
  )
}

export default AboutUs
