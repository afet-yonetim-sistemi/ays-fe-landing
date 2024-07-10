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

export default function LanguageSelector() {
  const { i18n } = useTranslation()

  const handleLanguage = (e: string) => {
    i18n.changeLanguage(e)
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="space-x-2 text-xl font-semibold"><span>{i18n.language.toUpperCase()}</span>
            <FaCaretDown /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuRadioGroup value={i18n.language} onValueChange={handleLanguage}>
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