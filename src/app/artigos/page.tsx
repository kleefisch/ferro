import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ArtigosContent } from '@/components/pages/artigos-content'
import { Container } from '@/components/ui/container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Artigos Jurídicos - Dra. Diulliany Ferro | Ferro Advocacia",
  description: "Artigos especializados em direito criminal e habeas corpus pela Dra. Diulliany Ferro. Conteúdo atualizado sobre defesa criminal e direitos do cidadão.",
  keywords: "artigos jurídicos, direito criminal, habeas corpus, prisão em flagrante, defesa criminal, advogado criminalista",
  openGraph: {
    title: "Artigos Jurídicos - Dra. Diulliany Ferro | Ferro Advocacia",
    description: "Artigos especializados em direito criminal e habeas corpus pela Dra. Diulliany Ferro. Conteúdo atualizado sobre defesa criminal e direitos do cidadão.",
    type: "website",
  },
}

export default function ArtigosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-secondary-900 text-white pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Artigos <span className="text-accent-500">Jurídicos</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-300 leading-relaxed">
              Conhecimento especializado em direito criminal para orientar e esclarecer seus direitos
            </p>
          </div>
        </Container>
      </section>

      <ArtigosContent />
      <Footer />
    </main>
  )
}
