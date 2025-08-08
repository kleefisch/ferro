import { DefaultSeoProps } from 'next-seo'

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Ferro Advocacia',
  defaultTitle: 'Ferro Advocacia - Especialistas em Direito',
  description: 'Escritório de advocacia especializado em direito civil, trabalhista e previdenciário. Atendimento personalizado e resultados comprovados.',
  canonical: 'https://ferro-advocacia.com.br',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://ferro-advocacia.com.br',
    siteName: 'Ferro Advocacia',
    title: 'Ferro Advocacia - Especialistas em Direito',
    description: 'Escritório de advocacia especializado em direito civil, trabalhista e previdenciário. Atendimento personalizado e resultados comprovados.',
    images: [
      {
        url: 'https://ferro-advocacia.com.br/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ferro Advocacia',
      },
    ],
  },
  twitter: {
    handle: '@ferroadvocacia',
    site: '@ferroadvocacia',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#1f2937',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}
