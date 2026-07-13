'use client'

import { HelpCircle, Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { mainNavLinks } from './constants'
import HeaderDropdown from './header-dropdown'

export const Header = (): React.ReactElement => {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return (): void => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      style={{
        background: 'linear-gradient(180deg, #CFDAEA 5.68%, #FFFFFF 100%)',
      }}
      className="relative w-full border-b border-slate-200 bg-white"
    >
      <div className="mx-auto flex h-[88px] w-full max-w-[1440px] items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/ays-logo.png" alt="AYS Logo" width={48} height={48} />

          <span className="flex flex-col leading-tight">
            <span className="typography-p-large-bold text-sky-700">
              Afet Yönetim Sistemi
            </span>
            <span className="typography-p-small-regular text-neutral-600">
              Sistem Hayat Kurtarır
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          <HeaderDropdown variant="desktop" />
          {mainNavLinks.map((item, index) => (
            <a
              key={`${item.label}-${index}`}
              href={item.href}
              className="typography-p-small-medium text-brand-blue"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="typography-p-small-medium hidden h-10 min-h-9 w-[75px] cursor-pointer items-center gap-2 rounded-lg border border-neutral-50 bg-neutral-50 px-4 py-1 text-neutral-700 transition-colors md:flex"
          >
            <span>TR</span>

            <Image
              src="/flags/turkey.svg"
              alt="Turkey"
              width={16}
              height={16}
            />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={24} className="text-brand-blue" />
            ) : (
              <Menu size={24} className="text-brand-blue" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[88px] bottom-0 z-30 overflow-y-auto bg-white px-4 md:px-8 lg:hidden">
          <HeaderDropdown
            variant="mobile"
            onLinkClick={() => setMobileOpen(false)}
          />

          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className="typography-p-small-bold text-brand-blue flex h-[51px] min-h-[32px] w-full items-center gap-3 px-3 py-[7.5px] md:px-4"
          >
            <HelpCircle size={16} className="shrink-0" />
            <span>Sıkça Sorulan Sorular</span>
          </a>

          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className="typography-p-small-bold text-brand-blue flex h-[51px] min-h-[32px] w-full items-center gap-3 px-3 py-[7.5px] md:px-4"
          >
            <Phone size={16} className="shrink-0" />
            <span>İletişim</span>
          </a>
        </div>
      )}
    </header>
  )
}
