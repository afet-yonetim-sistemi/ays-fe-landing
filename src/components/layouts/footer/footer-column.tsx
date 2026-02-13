import { Typography } from '@/components/common/typography/typography'
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
        <Typography.H4 className="text-white">{title}</Typography.H4>
        {children}
      </div>
    </div>
  )
}
