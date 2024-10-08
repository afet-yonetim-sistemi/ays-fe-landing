'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { FaCaretDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { clsx } from 'clsx'

const LanguageSelector = ({
  className,
}: {
  className?: string
}): JSX.Element => {
  const { i18n } = useTranslation()

  const handleLanguageChange = (e: string): void => {
    i18n.changeLanguage(e)
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={clsx('space-x-2 text-xl font-semibold', className)}
          >
            <span>{i18n.language.toUpperCase()}</span>
            <FaCaretDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup
            value={i18n.language}
            onValueChange={handleLanguageChange}
          >
            {i18n.languages.map((language) => (
              <DropdownMenuRadioItem key={language} value={language}>
                {language.toUpperCase()}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default LanguageSelector
