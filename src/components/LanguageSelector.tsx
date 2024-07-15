'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { FaCaretDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { clsx } from 'clsx'

export default function LanguageSelector({ className }: { className?: string }) {
  const { i18n } = useTranslation()

  const handleLanguageChange = (e: string) => {
    i18n.changeLanguage(e)
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost"
                  className={clsx('space-x-2 text-xl font-semibold', className)}><span>{i18n.language.toUpperCase()}</span>
            <FaCaretDown /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuRadioGroup value={i18n.language} onValueChange={handleLanguageChange}>
            {
              i18n.languages.map((language) =>
                <DropdownMenuRadioItem key={language} value={language}>{language.toUpperCase()}</DropdownMenuRadioItem>
              )
            }
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}