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
        hasHover && 'cursor-pointer hover:bg-blue-600',
        className
      )}
    >
      <Typography.Small className={cn('text-current', textClassName)}>
        {children}
      </Typography.Small>
    </div>
  )
}
