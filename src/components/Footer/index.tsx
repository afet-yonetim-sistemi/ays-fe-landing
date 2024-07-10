import SocialIcons from '@/components/SocialIcons'
import LanguageSelector from '@/components/LanguageSelector'
import i18n from 'i18next'

export default function Footer() {
  const { t } = i18n
  return <footer className="bg-nightBlue w-full text-background">
    <div className="container px-20 py-5 flex items-center justify-between">
      <span>{t('copyright')}</span>
      <div className="flex items-center justify-between gap-5">
        <SocialIcons />
        <LanguageSelector />
      </div>
    </div>
  </footer>
}