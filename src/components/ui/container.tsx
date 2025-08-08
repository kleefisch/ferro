import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'main' | 'article'
}

export function Container({ children, className, as: Component = 'div' }: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-screen-xl 2xl:max-w-[90rem] px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </Component>
  )
}
