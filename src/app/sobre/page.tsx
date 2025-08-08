import SobreContent from '@/components/pages/sobre-content'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata = {
  title: 'Sobre - Dra. Diulliany Ferro | Defesa Criminal',
  description:
    'Conheça a trajetória, valores e resultados da Dra. Diulliany Ferro. Defesa criminal com compromisso, estratégia e excelência.',
}

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-secondary-900 text-white">
      <Header />
      <SobreContent />
      <Footer />
    </main>
  )
}


