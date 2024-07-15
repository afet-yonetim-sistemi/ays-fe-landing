'use client'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import { useState } from 'react'
import Navigations from '@/components/Header/Navigations'
import Link from 'next/link'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import SocialIcons from '@/components/SocialIcons'

export default function DrawerNav() {
  const [open, setOpen] = useState(false)
  const pathName = usePathname()
  const { t } = useTranslation()

  return <Drawer direction="left" open={open} onOpenChange={setOpen}>
    <DrawerTrigger>
      {open ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
    </DrawerTrigger>
    <DrawerContent
      className="h-full mr-20 bg-nightBlue text-background rounded-none border-0 border-r-2 border-background">
      <DrawerHeader>
        <DrawerTitle className="text-2xl">{t('header.title')}</DrawerTitle>
        <DrawerDescription className="text-sm text-background/60">{t('header.subtitle')}</DrawerDescription>
      </DrawerHeader>
      <div className="flex flex-col items-center justify-center gap-2">
        {
          Navigations.map(({ pathName: path, title, Icon }) =>
            <Link href={path} key={path}
                  className={clsx('flex items-center justify-start gap-2 text-2xl hover:text-green/50 hover:bg-black/20 py-4 pl-5 w-full',
                    {
                      'text-green': pathName === path
                    }
                  )}>
              <Icon />
              <span>{t(`nav.${title}`)}</span>
            </Link>
          )
        }
      </div>
      <DrawerFooter>
        <SocialIcons className="text-4xl mb-5" />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
}