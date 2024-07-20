'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { useTranslation } from 'react-i18next'
import Navigations from '@/components/Header/Navigations'

export default function HeaderNav() {
  const pathName = usePathname()
  const { t } = useTranslation()
  return (
    <nav className="items-center justify-between font-normal text-normal hidden lg:flex pb-2">
      {
        Navigations.map(({ pathName: path, title, Icon }) =>
          <Link href={path} key={path} className={clsx('flex-center gap-2 py-1',
            {
              'border-b-2': pathName === path
            }
          )}>
            <Icon />
            <span>{t(`nav.${title}`)}</span>
          </Link>
        )
      }
    </nav>
  )
}