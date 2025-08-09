import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ArtigoLiberdadeProvisoria } from '@/components/pages/artigo-liberdade-provisoria'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Liberdade Provisória: Por Que Cada Minuto Conta na Sua Defesa | Dra. Diulliany Ferro",
  description: "Descubra como a agilidade na solicitação da liberdade provisória pode ser decisiva. Casos reais mostram como uma estratégia bem executada mudou vidas.",
  keywords: "liberdade provisória, habeas corpus, defesa criminal, estratégia jurídica, advogado criminalista, casos de sucesso",
  openGraph: {
    title: "Liberdade Provisória: Por Que Cada Minuto Conta na Sua Defesa",
    description: "Descubra como a agilidade na solicitação da liberdade provisória pode ser decisiva. Casos reais mostram como uma estratégia bem executada mudou vidas.",
    type: "article",
    publishedTime: "2025-08-08",
    authors: ["Dra. Diulliany Ferro"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liberdade Provisória: Por Que Cada Minuto Conta na Sua Defesa",
    description: "Descubra como a agilidade na solicitação da liberdade provisória pode ser decisiva.",
  }
}

export default function LiberdadeProvisoriaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ArtigoLiberdadeProvisoria />
      <Footer />
    </main>
  )
}
