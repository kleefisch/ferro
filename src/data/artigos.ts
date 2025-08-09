export interface Artigo {
  id: string
  titulo: string
  resumo: string
  data: string
  tempoLeitura: string
  autor: string
  categoria: string
  tags: string[]
  slug: string
  conteudo?: string
  imagem?: string
}

export const artigos: Artigo[] = [
  {
    id: 'prisao-em-flagrante',
    titulo: 'Fui Preso em Flagrante: Quais São Meus Direitos Imediatos?',
    resumo: 'A prisão em flagrante é um dos momentos mais impactantes que alguém pode vivenciar. Conheça seus direitos fundamentais e como se proteger.',
    data: '24 de Julho de 2025',
    tempoLeitura: '3 min',
    autor: 'Dra. Diulliany Ferro',
    categoria: 'Direito Criminal',
    tags: ['prisão em flagrante', 'direitos fundamentais', 'defesa criminal', 'advogado criminalista'],
    slug: 'prisao-em-flagrante',
    imagem: '/images/artigos/prisao-flagrante.jpg'
  },
  {
    id: 'liberdade-provisoria',
    titulo: 'Liberdade Provisória: Por Que Cada Minuto Conta na Sua Defesa',
    resumo: 'Descubra como a agilidade na solicitação da liberdade provisória pode ser decisiva. Casos reais mostram como uma estratégia bem executada mudou vidas.',
    data: '8 de Agosto de 2025',
    tempoLeitura: '4 min',
    autor: 'Dra. Diulliany Ferro',
    categoria: 'Habeas Corpus',
    tags: ['liberdade provisória', 'habeas corpus', 'estratégia jurídica', 'casos de sucesso'],
    slug: 'liberdade-provisoria',
    imagem: '/images/artigos/liberdade-provisoria.jpg'
  },
  {
    id: 'liberdade-provisoria-profissional',
    titulo: 'Liberdade Provisória: Um Guia Completo para Entender Seus Direitos',
    resumo: 'Compreenda de forma clara e objetiva como funciona a liberdade provisória, quais são seus direitos e quando é possível obtê-la.',
    data: '9 de Agosto de 2025',
    tempoLeitura: '5 min',
    autor: 'Dra. Diulliany Ferro',
    categoria: 'Habeas Corpus',
    tags: ['liberdade provisória', 'direitos', 'guia completo', 'orientação jurídica'],
    slug: 'liberdade-provisoria-profissional',
    imagem: '/images/artigos/liberdade-provisoria-guia.jpg'
  }
]

export const categorias = [
  'Todos os Artigos',
  'Direito Criminal',
  'Habeas Corpus',
  'Prisão em Flagrante',
  'Tribunal do Júri',
  'Lei de Drogas',
  'Violência Doméstica'
]

export function getArtigoPorSlug(slug: string): Artigo | undefined {
  return artigos.find(artigo => artigo.slug === slug)
}

export function getArtigosPorCategoria(categoria: string): Artigo[] {
  if (categoria === 'Todos os Artigos') {
    return artigos
  }
  return artigos.filter(artigo => artigo.categoria === categoria)
}
