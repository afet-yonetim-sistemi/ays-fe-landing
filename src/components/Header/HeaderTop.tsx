import Image from 'next/image'
import SocialIcons from '@/components/SocialIcons'
import LanguageSelector from '@/components/LanguageSelector'
import { t } from 'i18next'

export default function HeaderTop() {

  return <div className="flex items-center justify-between border-b-2 py-4">
    {/*slogan & logo container*/}
    <div className="flex gap-3">
      <div className="flex items-center justify-center">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className="text-3xl font-bold">{t('header.title')}</span>
        <span className="font-medium text-base">{t('header.subtitle')}</span>
      </div>
    </div>
    {/*slogan & logo container*/}

    {/*social icon & language container*/}
    <div className="flex items-center justify-between gap-5">
      <SocialIcons />
      <LanguageSelector />
    </div>
    {/*social icon & language container*/}
  </div>
}