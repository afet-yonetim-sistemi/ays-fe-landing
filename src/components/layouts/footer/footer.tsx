import { Button } from '@/components/ui/button'
import { Separator } from '@components/ui/separator'
import Image from 'next/image'
import { ReactElement } from 'react'
import {
  BOTTOM_LINKS,
  DEV_LINKS,
  HOME_LINKS,
  SOCIAL_ICON_CLASS,
  SOCIAL_ROW_1,
  SOCIAL_ROW_2,
} from './constants'
import { FooterColumn } from './footer-column'
import { FooterItem } from './footer-item'
import { FooterItems } from './footer-items'

export const Footer = (): ReactElement => {
  return (
    <footer className="flex flex-col items-start justify-center gap-8 bg-sky-100 px-4 py-5 md:px-8 md:py-10 lg:px-40 dark:bg-sky-800">
      <div className="mx-auto flex w-full flex-col gap-6 text-gray-300 md:flex-row">
        <FooterColumn title="Ana Sayfa">
          <FooterItems>
            {HOME_LINKS.map((link) => (
              <FooterItem key={link} className="flex items-center">
                {link}
              </FooterItem>
            ))}
          </FooterItems>
        </FooterColumn>

        <FooterColumn title="Geliştirici Ol">
          <FooterItems>
            {DEV_LINKS.map((link) => (
              <FooterItem key={link} className="flex items-center">
                {link}
              </FooterItem>
            ))}
          </FooterItems>
        </FooterColumn>

        <FooterColumn title="İletişim" className="h-full">
          <FooterItems className="h-full flex-1">
            <FooterItem hasHover={false}>
              iletisim@afetyonetimsistemi.org
            </FooterItem>

            <div className="mt-auto flex flex-col gap-4">
              <div className="flex gap-4">
                {SOCIAL_ROW_1.map(({ label, src, href }) => (
                  <Button
                    key={label}
                    size="icon"
                    aria-label={label}
                    className="bg-sky-200 dark:bg-sky-900"
                    asChild
                  >
                    <a href={href}>
                      <Image
                        src={src}
                        alt={label}
                        width={16}
                        height={16}
                        className={SOCIAL_ICON_CLASS}
                      />
                    </a>
                  </Button>
                ))}
              </div>

              <div className="flex gap-4">
                {SOCIAL_ROW_2.map(({ label, src, href }) => (
                  <Button
                    key={label}
                    size="icon"
                    aria-label={label}
                    className="bg-sky-200 dark:bg-sky-900"
                    asChild
                  >
                    <a href={href}>
                      <Image
                        src={src}
                        alt={label}
                        width={16}
                        height={16}
                        className={SOCIAL_ICON_CLASS}
                      />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </FooterItems>
        </FooterColumn>
      </div>

      <div className="mx-auto flex h-fit w-full flex-col gap-8">
        <Separator className="bg-gray-500 dark:bg-sky-400" />
        <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
          <div className="flex h-fit w-fit items-center justify-center gap-0.5">
            <Image src="/logo.png" alt="ays-logo" width={24} height={24} />
            <FooterItem
              className="flex-none"
              textClassName="block"
              hasHover={false}
            >
              © 2025 Afet Yönetim Sistemi
            </FooterItem>
          </div>
          <div className="mx-auto flex h-fit w-fit items-center justify-center gap-6">
            <div className="flex flex-wrap items-center justify-center">
              {BOTTOM_LINKS.map((link, index) => (
                <div
                  key={link}
                  className="relative flex h-fit items-center justify-center"
                >
                  <FooterItem
                    className="w-full justify-center px-8 text-center"
                    hasHover={false}
                  >
                    {link}
                  </FooterItem>
                  {index < BOTTOM_LINKS.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="absolute right-0 h-6 bg-sky-400"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
