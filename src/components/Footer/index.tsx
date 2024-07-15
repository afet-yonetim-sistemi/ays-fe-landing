import SocialIcons from '@/components/SocialIcons'
import LanguageSelector from '@/components/LanguageSelector'
import i18n from 'i18next'
import Container from '@/components/Container'

export default function Footer() {
  const { t } = i18n
  return <footer className="bg-nightBlue w-full text-background">
    <Container
      className="py-5 flex items-center justify-between flex-col lg:flex-row gap-4  lg:gap-0">
      <span>{t('copyright')}</span>
      <div className="flex items-center justify-between gap-5">
        <SocialIcons className="text-3xl" />
        <LanguageSelector className="hidden lg:block" />
      </div>
    </Container>
  </footer>
}