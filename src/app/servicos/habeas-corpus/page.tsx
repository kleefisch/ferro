import HabeasCorpusContent from '@/components/pages/servicos/habeas-corpus-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Habeas Corpus - Liberdade Imediata | Dra. Diulliany Ferro',
  description:
    'Especialista em Habeas Corpus com mais de 98% de casos bem-sucedidos. Defesa da liberdade com agilidade, técnica e estratégia. Atendimento 24h.',
  keywords: 'habeas corpus, liberdade provisória, prisão ilegal, advogado criminal, direito de liberdade, Goiânia, Brasil',
  openGraph: {
    title: 'Habeas Corpus - Liberdade Imediata | Dra. Diulliany Ferro',
    description:
      'Especialista em Habeas Corpus com mais de 98% de casos bem-sucedidos. Defesa da liberdade com agilidade, técnica e estratégia. Atendimento 24h.',
    url: '/servicos/habeas-corpus',
    type: 'website',
  },
}

export default function HabeasCorpusPage() {
  return <HabeasCorpusContent />
}
