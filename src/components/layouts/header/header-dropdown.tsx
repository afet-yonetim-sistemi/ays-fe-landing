'use client'

import { ChevronDown, ClipboardList } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AboutLinks } from './constants/links'

interface HeaderDropdownProps {
  variant?: 'desktop' | 'mobile'
  onLinkClick?: () => void
}

export default function HeaderDropdown({
  variant = 'desktop',
  onLinkClick,
}: HeaderDropdownProps): React.ReactElement {
  const [open, setOpen] = useState<boolean>(variant === 'mobile')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (variant !== 'desktop') return

    const handleClick = (e: MouseEvent): void => {
      if (
        ref.current &&
        e.target instanceof Node &&
        !ref.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)

    return (): void => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [variant])

  if (variant === 'mobile') {
    return (
      <div className="w-full">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          className="flex h-[51px] min-h-[32px] w-full items-center justify-between rounded-md bg-blue-50 px-3 py-[7.5px] transition-colors hover:bg-sky-100"
        >
          <div className="flex items-center gap-3">
            <ClipboardList
              size={16}
              strokeWidth={1.8}
              className="text-brand-blue shrink-0"
            />

            <span className="typography-p-small-medium text-brand-blue">
              AYS Hakkında
            </span>
          </div>

          <div className="flex h-5 w-5 items-center justify-center rounded-full border border-sky-800">
            <ChevronDown
              size={12}
              strokeWidth={2}
              className={`text-brand-blue transition-transform duration-200 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        {open && (
          <div className="mt-1 flex flex-col">
            {AboutLinks.map((item, index) => (
              <a
                key={`${item.label}-${index}`}
                href={item.href}
                onClick={onLinkClick}
                className="typography-p-small-bold flex min-h-[51px] items-center px-2 text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    )
  }
  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="typography-p-small-medium text-brand-blue flex cursor-pointer items-center gap-1 text-center hover:text-blue-600"
        aria-expanded={open}
      >
        AYS Hakkında
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 z-20 mt-3 w-72 -translate-x-1/2 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
          {AboutLinks.map((item, index) => (
            <a
              key={`${item.label}-${index}`}
              href={item.href}
              onClick={() => setOpen(false)}
              className="typography-p-small-medium text-brand-blue block rounded-md px-3 py-2 hover:bg-slate-50 hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
