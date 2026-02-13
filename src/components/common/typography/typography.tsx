import { cn } from '@/lib/utils'
import React, { ReactElement } from 'react'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const H1 = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <h1
    className={cn(
      'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      className
    )}
    {...props}
  >
    {children}
  </h1>
)

const H2 = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <h2
    className={cn(
      'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      className
    )}
    {...props}
  >
    {children}
  </h2>
)

const H3 = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <h3
    className={cn(
      'scroll-m-20 text-2xl font-semibold tracking-tight',
      className
    )}
    {...props}
  >
    {children}
  </h3>
)

const H4 = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <h4
    className={cn(
      'scroll-m-20 text-xl font-semibold tracking-normal',
      className
    )}
    {...props}
  >
    {children}
  </h4>
)

const P = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <p className={cn('text-base leading-6 font-normal', className)} {...props}>
    {children}
  </p>
)

const Blockquote = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <blockquote
    className={cn('mt-6 border-l-2 pl-6 italic', className)}
    {...props}
  >
    {children}
  </blockquote>
)

const Small = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <span className={cn('text-sm leading-5 font-normal', className)} {...props}>
    {children}
  </span>
)

const Mini = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <span className={cn('text-xs leading-4 font-normal', className)} {...props}>
    {children}
  </span>
)

const Lead = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <p className={cn('muted-foreground text-xl', className)} {...props}>
    {children}
  </p>
)

const Large = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <div className={cn('text-lg font-semibold', className)} {...props}>
    {children}
  </div>
)

const Muted = ({
  children,
  className,
  ...props
}: TypographyProps): ReactElement => (
  <p className={cn('muted-foreground text-sm', className)} {...props}>
    {children}
  </p>
)

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  Small,
  Mini,
  Lead,
  Large,
  Muted,
}
