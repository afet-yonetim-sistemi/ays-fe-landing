import { cn } from '@/lib/utils'
import React from 'react'

interface FooterItemProps {
  children: React.ReactNode
  className?: string
  textClassName?: string
  hasHover?: boolean
}

export const FooterItem = ({
  children,
  className,
  textClassName,
  hasHover = true,
}: FooterItemProps): React.ReactElement => {
  return (
    <div
      className={cn(
        'p-2 transition-colors',
        hasHover && 'cursor-pointer',
        className
      )}
    >
      <p
        className={cn(
          'typography-p-small-regular text-black dark:text-white',
          textClassName
        )}
      >
        {children}
      </p>
    </div>
  )
}
