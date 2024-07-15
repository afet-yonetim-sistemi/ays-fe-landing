import { clsx } from 'clsx'

const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <article
      className={clsx('bg-nightBlue p-5 rounded-lg text-md sm:text-xl md:text-2xl font-medium flex-center py-10 hover:shadow-md hover:shadow-black hover:scale-[1.02] transition duration-300 select-none', className)}>
      {children}
    </article>
  )
}

export default Card
