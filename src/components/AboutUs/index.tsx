import Container from '@/components/Container'
import i18n from 'i18next'

export default function AboutUs() {
  const { t } = i18n

  return <section className="bg-green w-full py-10 text-background">
    <Container className="space-y-5">
      <h2 className="font-medium text-5xl text-center">
        {t('aboutUs.title')}
      </h2>
      <div className="font-medium text-2xl space-y-5">
        <p>
          {t('aboutUs.description1')}
        </p>
        <p>
          {t('aboutUs.description2')}
        </p>
      </div>
    </Container>
  </section>
}