'use client'

import { DefaultSeo } from 'next-seo'
import { defaultSEO } from '@/lib/seo'

export function SEOProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      {children}
    </>
  )
}
