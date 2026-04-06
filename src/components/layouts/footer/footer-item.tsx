import { Typography } from '@/components/common/typography/typography'
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
      <Typography.Regular
        className={cn('text-black dark:text-white', textClassName)}
      >
        {children}
      </Typography.Regular>
    </div>
  )
}
