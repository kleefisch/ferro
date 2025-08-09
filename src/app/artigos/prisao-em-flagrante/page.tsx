import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ArtigoPrisaoFlagrante } from '@/components/pages/artigo-prisao-flagrante'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Fui Preso em Flagrante: Quais São Meus Direitos Imediatos? | Dra. Diulliany Ferro",
  description: "Conheça seus direitos fundamentais durante uma prisão em flagrante. Artigo completo da Dra. Diulliany Ferro sobre direitos imediatos e como se proteger.",
  keywords: "prisão em flagrante, direitos imediatos, advogado criminalista, direito ao silêncio, assistência jurídica, habeas corpus",
  openGraph: {
    title: "Fui Preso em Flagrante: Quais São Meus Direitos Imediatos?",
    description: "Conheça seus direitos fundamentais durante uma prisão em flagrante. Artigo completo da Dra. Diulliany Ferro sobre direitos imediatos e como se proteger.",
    type: "article",
    publishedTime: "2025-07-24",
    authors: ["Dra. Diulliany Ferro"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fui Preso em Flagrante: Quais São Meus Direitos Imediatos?",
    description: "Conheça seus direitos fundamentais durante uma prisão em flagrante. Artigo completo da Dra. Diulliany Ferro.",
  }
}

export default function PrisaoFlagrantePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ArtigoPrisaoFlagrante />
      <Footer />
    </main>
  )
}
