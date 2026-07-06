'use client'

import { Separator as BaseSeparator } from '@base-ui/react/separator'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Separator = React.forwardRef<
  React.ElementRef<typeof BaseSeparator>,
  React.ComponentPropsWithoutRef<typeof BaseSeparator> & {
    decorative?: boolean
  }
>(({ className, orientation = 'horizontal', decorative, ...props }, ref) => {
  if (decorative) {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          'bg-border shrink-0',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
          className
        )}
        {...(props as unknown as React.HTMLAttributes<HTMLDivElement>)}
      />
    )
  }

  return (
    <BaseSeparator
      ref={ref}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
})
Separator.displayName = 'Separator'

export { Separator }
