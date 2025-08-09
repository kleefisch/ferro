'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Phone } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { ShareButtons } from '@/components/ui/share-buttons'
import Link from 'next/link'

export function ArtigoPrisaoFlagrante() {
  return (
    <article className="pt-20 bg-white">
      {/* Header do Artigo */}
      <section className="bg-secondary-900 text-white py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link 
                href="/artigos"
                className="flex items-center text-accent-400 hover:text-accent-300 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar aos artigos
              </Link>
            </motion.div>

            {/* Categoria */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4"
            >
              <span className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Prisão em Flagrante
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              Fui Preso em Flagrante: Quais São Meus Direitos Imediatos?
            </motion.h1>

            {/* Meta informações */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-secondary-300 mb-8"
            >
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-accent-400" />
                <span>Por Dra. Diulliany Ferro</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>24 de Julho de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Leitura de 3 min</span>
              </div>
            </motion.div>

            {/* Botão de Compartilhar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ShareButtons 
                title="Fui Preso em Flagrante: Quais São Meus Direitos Imediatos?"
                description="Conheça seus direitos fundamentais durante uma prisão em flagrante. Artigo completo da Dra. Diulliany Ferro."
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Imagem Hero */}
      <section className="relative h-64 md:h-80 bg-gradient-to-br from-secondary-800 to-secondary-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-6xl mb-4">⚖️</div>
            <div className="text-xl font-semibold">Direitos Fundamentais</div>
          </div>
        </div>
      </section>

      {/* Conteúdo do Artigo */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Conteúdo Principal */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="prose prose-lg max-w-none"
                >
                  {/* Introdução */}
                  <p className="text-xl leading-relaxed text-secondary-700 mb-8 font-medium">
                    A prisão em flagrante é um dos momentos mais impactantes e desafiadores que alguém pode vivenciar. A súbita privação da liberdade, a pressão do ambiente policial e a incerteza do futuro podem gerar um estado de vulnerabilidade extrema. No entanto, é precisamente nesse cenário que o conhecimento e a exigência dos seus direitos fundamentais se tornam a principal ferramenta de proteção.
                  </p>

                  <p className="mb-8">
                    A Constituição Federal garante prerrogativas inalienáveis, que devem ser respeitadas desde o primeiro instante.
                  </p>

                  {/* Seção 1 */}
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6 flex items-center">
                    <span className="bg-accent-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4">1</span>
                    O Inalienável Direito ao Silêncio
                  </h2>

                  <p className="mb-6">
                    O direito de permanecer em silêncio, consagrado no artigo 5º, inciso LXIII da Constituição Federal, é uma das mais importantes garantias do indivíduo em face do Estado. Ele significa que você <strong>não é obrigado a produzir provas contra si mesmo</strong>.
                  </p>

                  <div className="bg-accent-50 border-l-4 border-accent-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-accent-800 font-medium mb-2">⚠️ Importante:</p>
                    <p className="text-accent-700">
                      Tudo o que for dito pode e será usado contra você no decorrer do processo penal. Portanto, a regra de ouro é: identifique-se quando solicitado, mas, para todas as demais perguntas, afirme que só se manifestará na presença de seu advogado.
                    </p>
                  </div>

                  <p className="mb-8">
                    Exercer esse direito não configura culpa, mas sim a busca por uma defesa técnica e estratégica.
                  </p>

                  {/* Seção 2 */}
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6 flex items-center">
                    <span className="bg-accent-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4">2</span>
                    O Direito Inegociável de Ser Assistido por um Advogado
                  </h2>

                  <p className="mb-6">
                    Desde o exato momento da prisão, você tem o <strong>direito absoluto de ser assistido por um advogado</strong> de sua confiança. Este é um direito inegociável e a sua violação pode invalidar atos processuais.
                  </p>

                  <p className="mb-4">A presença de um profissional qualificado é essencial para:</p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-3">•</span>
                      Garantir que todos os procedimentos policiais sejam conduzidos conforme a lei
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-3">•</span>
                      Identificar eventuais ilegalidades na prisão em flagrante
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-3">•</span>
                      Orientar sobre o direito ao silêncio e o que pode ou não ser declarado
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent-500 mr-3">•</span>
                      Iniciar a construção da estratégia de defesa, visando, se possível, a liberdade provisória
                    </li>
                  </ul>

                  <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-primary-700">
                      <strong>Lembre-se:</strong> Caso você não indique um advogado, o Estado tem o dever de nomear um defensor público para garantir sua assistência jurídica.
                    </p>
                  </div>

                  {/* Seção 3 */}
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6 flex items-center">
                    <span className="bg-accent-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4">3</span>
                    O Direito à Comunicação com a Família
                  </h2>

                  <p className="mb-6">
                    As autoridades policiais têm o dever de comunicar a sua prisão imediatamente a um familiar ou a uma pessoa por você indicada. <strong>Este não é um favor, mas um direito assegurado.</strong>
                  </p>

                  <p className="mb-8">
                    Essa comunicação é vital para que seus entes queridos possam ser informados sobre sua situação, tomar as providências necessárias e, principalmente, contatar um advogado para iniciar sua defesa.
                  </p>

                  {/* Seção 4 */}
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6 flex items-center">
                    <span className="bg-accent-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4">4</span>
                    O Direito à Integridade Física e Moral
                  </h2>

                  <p className="mb-6">
                    É inadmissível e ilegal qualquer forma de tortura, tratamento desumano ou degradante. <strong>Sua integridade física e moral deve ser preservada</strong> em todos os momentos da prisão e durante a custódia.
                  </p>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-red-800 font-medium mb-2">🚨 Denuncie:</p>
                    <p className="text-red-700">
                      Qualquer tipo de agressão, ameaça ou abuso por parte de agentes do Estado deve ser imediatamente denunciado ao seu advogado, pois configura crime e deve ser apurado pelas autoridades competentes.
                    </p>
                  </div>

                  {/* Conclusão */}
                  <div className="bg-gradient-to-r from-secondary-50 to-accent-50 p-8 rounded-2xl mb-12">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4">Conclusão</h3>
                    <p className="text-secondary-700 leading-relaxed">
                      Em suma, ser preso em flagrante é uma experiência avassaladora, mas estar ciente de seus direitos imediatos é o primeiro e mais crucial passo para proteger sua liberdade. A complexidade do sistema penal exige a orientação e a intervenção de um advogado criminalista que possa atuar rapidamente para garantir que cada etapa seja conduzida dentro da legalidade, evitando injustiças e buscando a melhor solução para o seu caso.
                    </p>
                  </div>

                  {/* Sobre a Autora */}
                  <div className="bg-white border border-secondary-200 rounded-xl p-8 mb-12">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        DF
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-secondary-900 mb-2">Dra. Diulliany Ferro</h4>
                        <p className="text-secondary-600 mb-4">
                          Advogada criminalista especializada em habeas corpus e defesa criminal. Com vasta experiência em casos de prisão em flagrante, atua com dedicação e expertise para garantir os direitos fundamentais de seus clientes.
                        </p>
                        <div className="flex gap-4">
                          <Link href="/sobre">
                            <Button variant="outline" size="sm">
                              Saiba mais
                            </Button>
                          </Link>
                          <Link href="#contato">
                            <Button size="sm" className="bg-accent-500 hover:bg-accent-600 text-white">
                              Entre em contato
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* CTA Principal */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white p-6 rounded-xl"
                  >
                    <h3 className="text-lg font-bold mb-3">
                      Precisa de Ajuda Imediata Após Uma Prisão em Flagrante?
                    </h3>
                    <p className="text-secondary-300 text-sm mb-4">
                      Em uma situação de prisão em flagrante, a agilidade na atuação jurídica é o fator mais decisivo. Cada hora pode ser crucial para o desdobramento do seu caso.
                    </p>
                    <p className="text-secondary-300 text-sm mb-6">
                      A Dra. Diulliany Ferro, advogada criminalista com atendimento 24 horas, está pronta para atuar com a urgência e a expertise necessárias para defender seus direitos desde o primeiro momento.
                    </p>
                    <WhatsAppButton 
                      className="w-full bg-accent-500 hover:bg-accent-600 text-white border-0 mb-3"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      FALE AGORA COM A ADVOGADA
                    </WhatsAppButton>
                    <p className="text-xs text-secondary-400 text-center">
                      Atendimento 24 horas por dia
                    </p>
                  </motion.div>

                  {/* Artigos Relacionados */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white border border-secondary-200 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-secondary-900 mb-4">
                      Artigos Relacionados
                    </h3>
                    <div className="space-y-4">
                      <div className="text-sm text-secondary-600">
                        <p className="mb-2">Em breve, novos artigos sobre:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-accent-500 mr-2">•</span>
                            Habeas Corpus: Quando e Como Solicitar
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent-500 mr-2">•</span>
                            Liberdade Provisória: Seus Direitos
                          </li>
                          <li className="flex items-start">
                            <span className="text-accent-500 mr-2">•</span>
                            Audiência de Custódia: O que Esperar
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Contato Rápido */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-accent-50 border border-accent-200 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-accent-800 mb-3">
                      Dúvidas Jurídicas?
                    </h3>
                    <p className="text-accent-700 text-sm mb-4">
                      Entre em contato para esclarecimentos sobre seu caso específico.
                    </p>
                    <Link href="#contato">
                      <Button size="sm" className="w-full bg-accent-500 hover:bg-accent-600 text-white">
                        Consultar Advogada
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  )
}
