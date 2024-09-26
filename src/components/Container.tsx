import React from 'react'
import { clsx } from 'clsx'

const Container: React.FC<{
  children: React.ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <div className={clsx('container px-1 md:px-2', className)}>{children}</div>
  )
}

export default Container
