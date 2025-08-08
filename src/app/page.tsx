import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { AreasAtuacao } from '@/components/sections/areas-atuacao'
import { Sobre } from '@/components/sections/sobre'
import { Servicos } from '@/components/sections/servicos'
import { Resultados } from '@/components/sections/resultados'
import { Depoimentos } from '@/components/sections/depoimentos'
import { FAQ } from '@/components/sections/faq'
import { Contato } from '@/components/sections/contato'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AreasAtuacao />
      <Sobre />
      <Servicos />
      <Resultados />
      <Depoimentos />
      <FAQ />
      <Contato />
      <Footer />
    </main>
  )
}
