import { Button } from '@/components/ui/button'
import { Separator } from '@components/ui/separator'
import { CircleFadingArrowUpIcon } from 'lucide-react'
import Image from 'next/image'
import { ReactElement } from 'react'
import { FooterColumn } from './footer-column'
import { FooterItem } from './footer-item'
import { FooterItems } from './footer-items'

const HOME_LINKS = [
  'Afet Yönetim Sistemi (AYS) Nedir?',
  'AYS’yi Kimler Kullanabilir?',
  'Neden AYS?',
  '2023 Deprem Raporu',
  'Sıkça Sorulan Sorular',
]

const DEV_LINKS = [
  'Hakkımızda',
  'AYS’yi Birlikte Geliştiriyoruz',
  'Neden Topluluğumuzun Bir Parçası Olmalısın?',
  'Yeteneğinle Projeye Katkı Sağla',
  'Sıkça Sorulan Sorular',
]

const BOTTOM_LINKS = [
  'MIT Lisansı ile lisanslanmıştır.',
  'Kullanım Şartları',
  'Gizlilik Politikası',
]

export const Footer = (): ReactElement => {
  return (
    <footer className="flex flex-col items-start justify-center gap-8 bg-blue-500 px-4 py-5 md:px-8 md:py-10 lg:px-40">
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
                {[1, 2, 3].map((i) => (
                  <Button key={`social-1-${i}`} size="icon">
                    <CircleFadingArrowUpIcon />
                  </Button>
                ))}
              </div>

              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <Button key={`social-2-${i}`} size="icon">
                    <CircleFadingArrowUpIcon />
                  </Button>
                ))}
              </div>
            </div>
          </FooterItems>
        </FooterColumn>
      </div>

      <div className="mx-auto flex h-fit w-full flex-col gap-8">
        <Separator className="bg-gray-500" />
        <div className="flex h-fit w-full flex-col items-center justify-center gap-4">
          <div className="flex h-fit w-fit items-center justify-center gap-0.5">
            <Image src="/logo.png" alt="ays-logo" width={24} height={24} />
            <FooterItem
              className="flex-none"
              textClassName="block text-gray-300"
              hasHover={false}
            >
              © 2025 Afet Yönetim Sistemi
            </FooterItem>
          </div>
          <div className="mx-auto flex h-fit w-fit items-center justify-center">
            <div className="grid auto-cols-fr grid-flow-col items-center">
              {BOTTOM_LINKS.map((link, index) => (
                <div
                  key={link}
                  className="relative flex h-fit items-center justify-center"
                >
                  <FooterItem
                    className="w-full justify-center px-8 text-center"
                    textClassName="text-gray-300"
                    hasHover={false}
                  >
                    {link}
                  </FooterItem>
                  {index < BOTTOM_LINKS.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="absolute right-0 h-4 bg-gray-500"
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
