import SocialIcons from '@/components/SocialIcons'
import LanguageSelector from '@/components/LanguageSelector'
import i18n from 'i18next'
import Container from '@/components/Container'

const Footer: React.FC = (): JSX.Element => {
  const { t } = i18n
  return (
    <footer className="bg-nightBlue w-full">
      <Container className="py-5 flex items-center justify-between flex-col lg:flex-row gap-4 lg:gap-0">
        <span className="text-sm md:text-md">{t('copyright')}</span>
        <div className="flex items-center justify-between lg:gap-5">
          <SocialIcons className="text-3xl md:text-2xl" />
          <LanguageSelector className="hidden lg:flex" />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
