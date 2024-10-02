'use client'

import Image from 'next/image'
import SocialIcons from '@/components/SocialIcons'
import LanguageSelector from '@/components/LanguageSelector'
import { useTranslation } from 'react-i18next'

const HeaderTop = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className="items-center justify-between border-b py-2 hidden lg:flex">
      <div className="flex gap-3">
        <div className="flex items-center justify-center">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="text-2xl font-semibold">{t('header.title')}</span>
          <span className="font-medium text-base">{t('header.subtitle')}</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5">
        <SocialIcons />
        <LanguageSelector />
      </div>
    </div>
  )
}

export default HeaderTop
