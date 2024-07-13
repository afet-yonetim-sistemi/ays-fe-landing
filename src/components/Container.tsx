import { clsx } from 'clsx'

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={clsx('container px-10', className)}>
    {children}
  </div>
}