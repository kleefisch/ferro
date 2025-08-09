import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ArtigoLiberdadeProvisoriaProf } from '@/components/pages/artigo-liberdade-provisoria-prof'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Liberdade Provisória: Um Guia Completo para Entender Seus Direitos | Dra. Diulliany Ferro",
  description: "Compreenda de forma clara e objetiva como funciona a liberdade provisória, quais são seus direitos e quando é possível obtê-la.",
  keywords: "liberdade provisória, direitos, guia completo, orientação jurídica, quando solicitar, como funciona",
  openGraph: {
    title: "Liberdade Provisória: Um Guia Completo para Entender Seus Direitos",
    description: "Compreenda de forma clara e objetiva como funciona a liberdade provisória, quais são seus direitos e quando é possível obtê-la.",
    type: "article",
    publishedTime: "2025-08-09",
    authors: ["Dra. Diulliany Ferro"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liberdade Provisória: Um Guia Completo para Entender Seus Direitos",
    description: "Compreenda de forma clara e objetiva como funciona a liberdade provisória.",
  }
}

export default function LiberdadeProvisoriaProf() {
  return (
    <main className="min-h-screen">
      <Header />
      <ArtigoLiberdadeProvisoriaProf />
      <Footer />
    </main>
  )
}
