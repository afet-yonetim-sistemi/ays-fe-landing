import { cn } from '@/lib/utils'
import React from 'react'

interface FooterColumnProps {
  title: string
  children: React.ReactNode
  className?: string
}

export const FooterColumn = ({
  title,
  children,
  className,
}: FooterColumnProps): React.ReactElement => {
  return (
    <div className="w-full p-5">
      <div className={cn('flex flex-col gap-8', className)}>
        <h4 className="typography-h4 text-sky-500 dark:text-sky-200">
          {title}
        </h4>
        {children}
      </div>
    </div>
  )
}
