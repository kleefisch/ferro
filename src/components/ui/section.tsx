import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './container'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  as?: 'section' | 'div' | 'main' | 'article'
}

export function Section({ 
  children, 
  className, 
  containerClassName,
  as: Component = 'section' 
}: SectionProps) {
  return (
    <Component className={cn('py-16 sm:py-24', className)}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </Component>
  )
}
