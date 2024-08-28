import { clsx } from 'clsx'

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={clsx('container px-1 md:px-2', className)}>{children}</div>
  )
}
