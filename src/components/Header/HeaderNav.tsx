'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { AiOutlineHome } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

export default function HeaderNav() {
  const pathName = usePathname()
  const { t } = useTranslation()
  return (
    <nav className="flex items-center justify-between font-normal text-normal">
      <Link href="/" className={clsx('flex-center gap-2 py-1', {
        'border-b-2': pathName === '/' || pathName === '/home'
      })}>
        <AiOutlineHome />
        <span>{t('nav.home')}</span>
      </Link>
    </nav>
  )
}