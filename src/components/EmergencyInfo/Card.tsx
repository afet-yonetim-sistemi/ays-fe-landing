import { clsx } from 'clsx'

const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <article className={clsx('bg-nightBlue p-5 rounded-lg text-2xl font-medium flex-center py-10', className)}>
      {children}
    </article>
  )
}

export default Card
