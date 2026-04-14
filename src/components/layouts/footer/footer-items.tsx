import { cn } from '@/lib/utils'
import React from 'react'

interface FooterItemsProps {
  children: React.ReactNode
  className?: string
}

export const FooterItems = ({
  children,
  className,
}: FooterItemsProps): React.ReactElement => {
  return <div className={cn('flex flex-col', className)}>{children}</div>
}
