'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Award, CheckCircle, Info, Star } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { ShareButtons } from '@/components/ui/share-buttons'
import Link from 'next/link'

export function ArtigoLiberdadeProvisoriaProf() {
  return (
    <article className="pt-20 bg-white">
      {/* Header do Artigo */}
      <section className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link 
                href="/artigos"
                className="flex items-center text-accent-300 hover:text-accent-200 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar aos artigos
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                {/* Categoria */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-6"
                >
                  <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Guia Completo
                  </span>
                </motion.div>

                {/* Título */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  Liberdade Provisória: <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">Um Guia Completo</span> para Entender Seus Direitos
                </motion.h1>

                {/* Meta informações */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-6 text-secondary-200 mb-8"
                >
                  <div className="flex items-center gap-2 bg-secondary-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    <User className="w-4 h-4 text-accent-400" />
                    <span className="text-sm">Por Dra. Diulliany Ferro</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">9 de Agosto de 2025</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Leitura de 5 min</span>
                  </div>
                </motion.div>

                {/* Botão de Compartilhar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <ShareButtons 
                    title="Liberdade Provisória: Um Guia Completo para Entender Seus Direitos"
                    description="Compreenda de forma clara e objetiva como funciona a liberdade provisória, quais são seus direitos e quando é possível obtê-la."
                    className="[&>span]:text-secondary-300 [&>button]:text-secondary-300 [&>button]:hover:text-accent-300"
                  />
                </motion.div>
              </div>

              {/* Elemento visual elegante */}
              <div className="lg:col-span-4">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full flex items-center justify-center border border-accent-400/30 backdrop-blur-sm">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Award className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  {/* Elementos decorativos */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400/30 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-accent-500/20 rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Conteúdo do Artigo */}
      <section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Conteúdo Principal */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="prose prose-lg max-w-none"
                >
                  {/* Introdução elegante */}
                  <div className="bg-gradient-to-br from-secondary-50 to-accent-50 border-l-4 border-accent-500 p-8 rounded-r-2xl mb-12 shadow-sm">
                    <p className="text-xl leading-relaxed text-secondary-800 mb-4 font-medium">
                      A liberdade provisória representa um dos direitos mais importantes no sistema judicial brasileiro. 
                      Este guia esclarece de forma objetiva quando e como esse direito pode ser exercido.
                    </p>
                    <p className="text-secondary-700 leading-relaxed">
                      Compreender esse processo é fundamental para quem enfrenta uma situação judicial complexa, 
                      pois permite tomar decisões informadas sobre os próximos passos.
                    </p>
                  </div>

                  {/* Seção 1 */}
                  <div className="mb-16">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-6 shadow-lg">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <h2 className="text-3xl font-bold text-secondary-900">
                        O Que É Liberdade Provisória
                      </h2>
                    </div>

                    <p className="mb-6 text-secondary-700 leading-relaxed">
                      A liberdade provisória é o direito de uma pessoa responder ao processo judicial em liberdade, 
                      ao invés de permanecer presa durante a tramitação do caso. É uma garantia constitucional que 
                      reconhece que toda pessoa é inocente até que se prove o contrário.
                    </p>

                    <div className="bg-white border border-secondary-200 rounded-2xl p-8 shadow-sm mb-8">
                      <h4 className="font-bold text-secondary-900 mb-4 flex items-center">
                        <Info className="w-5 h-5 mr-3 text-accent-600" />
                        Importante saber:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <h5 className="font-semibold text-secondary-800 mb-2">✓ É um direito, não um favor</h5>
                          <p className="text-secondary-600">A liberdade provisória está prevista na Constituição Federal</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-secondary-800 mb-2">✓ Pode ter condições</h5>
                          <p className="text-secondary-600">O juiz pode impor regras que devem ser cumpridas</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-secondary-800 mb-2">✓ Não é automática</h5>
                          <p className="text-secondary-600">Precisa ser solicitada através de advogado especializado</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-secondary-800 mb-2">✓ Depende do caso</h5>
                          <p className="text-secondary-600">Cada situação é analisada individualmente pelo magistrado</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seção 2 */}
                  <div className="mb-16">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-6 shadow-lg">
                        <span className="text-white font-bold text-lg">2</span>
                      </div>
                      <h2 className="text-3xl font-bold text-secondary-900">
                        Quando Pode Ser Concedida
                      </h2>
                    </div>

                    <p className="mb-8 text-secondary-700 leading-relaxed">
                      A liberdade provisória pode ser concedida quando não há necessidade de manter a pessoa presa 
                      durante o processo. O juiz avalia diversos fatores para tomar essa decisão.
                    </p>

                    <div className="space-y-6 mb-8">
                      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                        <h4 className="font-bold text-green-800 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Situações Favoráveis
                        </h4>
                        <ul className="space-y-2 text-green-700 text-sm">
                          <li>• Pessoa com residência fixa e vínculos familiares</li>
                          <li>• Trabalho ou atividade profissional regular</li>
                          <li>• Primeiro envolvimento com a justiça</li>
                          <li>• Crime sem violência ou grave ameaça</li>
                          <li>• Não há risco de fuga ou interferência na investigação</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                        <h4 className="font-bold text-blue-800 mb-3">
                          Condições Que Podem Ser Impostas
                        </h4>
                        <ul className="space-y-2 text-blue-700 text-sm">
                          <li>• Comparecer em juízo quando solicitado</li>
                          <li>• Não se ausentar da cidade sem autorização</li>
                          <li>• Não frequentar determinados locais</li>
                          <li>• Recolher-se em casa durante a noite</li>
                          <li>• Usar tornozeleira eletrônica</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Seção 3 */}
                  <div className="mb-16">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-6 shadow-lg">
                        <span className="text-white font-bold text-lg">3</span>
                      </div>
                      <h2 className="text-3xl font-bold text-secondary-900">
                        Como Solicitar
                      </h2>
                    </div>

                    <p className="mb-6 text-secondary-700 leading-relaxed">
                      O pedido de liberdade provisória deve ser feito por um advogado especializado, que conhece 
                      os procedimentos corretos e pode apresentar os melhores argumentos para cada caso específico.
                    </p>

                    <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-2xl p-8 mb-8 border border-secondary-100">
                      <h4 className="font-bold text-secondary-900 mb-6 text-center text-xl">
                        Processo Passo a Passo
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-white font-bold">1</span>
                          </div>
                          <h5 className="font-semibold text-secondary-800 mb-2">Análise do Caso</h5>
                          <p className="text-secondary-600 text-sm">Avaliação detalhada da situação jurídica</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-white font-bold">2</span>
                          </div>
                          <h5 className="font-semibold text-secondary-800 mb-2">Coleta de Documentos</h5>
                          <p className="text-secondary-600 text-sm">Reunião de comprovantes e certidões necessárias</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-white font-bold">3</span>
                          </div>
                          <h5 className="font-semibold text-secondary-800 mb-2">Petição ao Juiz</h5>
                          <p className="text-secondary-600 text-sm">Elaboração e protocolo do pedido fundamentado</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                      <h4 className="font-bold text-yellow-800 mb-3">⚠️ Atenção Importante</h4>
                      <p className="text-yellow-700 text-sm leading-relaxed">
                        O tempo é um fator crucial. Quanto mais rapidamente o pedido for apresentado após a prisão, 
                        maiores são as chances de sucesso. Por isso, é essencial buscar orientação jurídica 
                        especializada imediatamente.
                      </p>
                    </div>
                  </div>

                  {/* Seção 4 */}
                  <div className="mb-16">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-6 shadow-lg">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <h2 className="text-3xl font-bold text-secondary-900">
                        Documentos Necessários
                      </h2>
                    </div>

                    <p className="mb-6 text-secondary-700 leading-relaxed">
                      Para fortalecer o pedido de liberdade provisória, alguns documentos são fundamentais. 
                      Eles ajudam a demonstrar os vínculos da pessoa com a sociedade e sua idoneidade.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white border border-secondary-200 rounded-2xl p-6 shadow-sm">
                        <h5 className="font-semibold text-secondary-900 mb-4">📄 Documentos Pessoais</h5>
                        <ul className="space-y-2 text-secondary-700 text-sm">
                          <li>• RG e CPF</li>
                          <li>• Comprovante de residência</li>
                          <li>• Certidão de nascimento/casamento</li>
                          <li>• Atestado de antecedentes</li>
                        </ul>
                      </div>

                      <div className="bg-white border border-secondary-200 rounded-2xl p-6 shadow-sm">
                        <h5 className="font-semibold text-secondary-900 mb-4">💼 Vínculos Sociais</h5>
                        <ul className="space-y-2 text-secondary-700 text-sm">
                          <li>• Carteira de trabalho</li>
                          <li>• Declaração de emprego</li>
                          <li>• Comprovante de renda</li>
                          <li>• Declarações de pessoas próximas</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Conclusão elegante */}
                  <div className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white p-10 rounded-2xl mb-12 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      <span className="text-accent-300">Considerações Finais</span>
                    </h3>
                    <p className="mb-6 leading-relaxed text-secondary-100">
                      A liberdade provisória é um direito fundamental que pode fazer toda a diferença na vida de uma pessoa 
                      e sua família. Compreender como funciona este processo é o primeiro passo para tomar as decisões 
                      corretas em um momento difícil.
                    </p>
                    <p className="leading-relaxed text-secondary-200 text-center">
                      Lembre-se: cada caso é único e merece atenção especializada. A orientação jurídica adequada 
                      é essencial para garantir que todos os direitos sejam respeitados e que as melhores 
                      estratégias sejam adotadas.
                    </p>
                  </div>

                  {/* Sobre a Autora */}
                  <div className="bg-white border border-secondary-200 rounded-2xl p-8 shadow-sm">
                    <div className="flex items-start gap-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        DF
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-secondary-900 mb-3">Dra. Diulliany Ferro</h4>
                        <p className="text-secondary-600 mb-6 leading-relaxed">
                          Advogada especializada em direito criminal com mais de 15 anos de experiência. 
                          Dedica-se a orientar e defender pessoas em situações jurídicas complexas, sempre 
                          com foco na proteção dos direitos fundamentais e na busca pelas melhores soluções.
                        </p>
                        <div className="flex gap-4">
                          <Link href="/sobre">
                            <Button variant="outline" className="border-accent-500 text-accent-600 hover:bg-accent-50">
                              Conheça minha trajetória
                            </Button>
                          </Link>
                          <Link href="#contato">
                            <Button className="bg-accent-500 hover:bg-accent-600 text-white">
                              Agendar consulta
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar Elegante */}
              <div className="lg:col-span-4">
                <div className="sticky top-24 space-y-8">
                  {/* Navegação do Artigo */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white border border-secondary-200 rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-secondary-900 mb-6 flex items-center">
                      <Star className="w-5 h-5 mr-3 text-accent-600" />
                      Neste Artigo
                    </h3>
                    <nav className="space-y-4">
                      {[
                        "O Que É Liberdade Provisória",
                        "Quando Pode Ser Concedida", 
                        "Como Solicitar",
                        "Documentos Necessários"
                      ].map((item, index) => (
                        <a 
                          key={index}
                          href={`#secao-${index + 1}`} 
                          className="flex items-center text-secondary-600 hover:text-accent-600 transition-colors text-sm group"
                        >
                          <div className="w-6 h-6 bg-accent-100 group-hover:bg-accent-200 rounded-lg flex items-center justify-center mr-3 transition-colors">
                            <span className="text-accent-600 text-xs font-medium">{index + 1}</span>
                          </div>
                          {item}
                        </a>
                      ))}
                    </nav>
                  </motion.div>

                  {/* CTA Elegante */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-accent-50 to-accent-100 border border-accent-200 rounded-2xl p-8 shadow-sm"
                  >
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-accent-800 mb-3">
                        Precisa de Orientação?
                      </h3>
                      <p className="text-accent-700 text-sm leading-relaxed mb-6">
                        Cada situação jurídica é única e merece atenção especializada. 
                        Oferecemos consultas personalizadas para esclarecer suas dúvidas e 
                        definir a melhor estratégia para seu caso.
                      </p>
                    </div>
                    <WhatsAppButton 
                      className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white border-0 shadow-lg mb-4"
                    >
                      Agendar Consulta
                    </WhatsAppButton>
                    <p className="text-xs text-accent-600 text-center">
                      Atendimento presencial e online
                    </p>
                  </motion.div>

                  {/* Artigos Relacionados */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-secondary-50 border border-secondary-200 rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-secondary-900 mb-6">
                      Continue Lendo
                    </h3>
                    <div className="space-y-4">
                      <Link href="/artigos/prisao-em-flagrante">
                        <div className="p-4 bg-white rounded-xl hover:shadow-md transition-shadow cursor-pointer border border-secondary-100">
                          <h4 className="font-semibold text-secondary-800 text-sm mb-2">
                            Direitos na Prisão em Flagrante
                          </h4>
                          <p className="text-secondary-600 text-xs">
                            Conheça seus direitos imediatos
                          </p>
                        </div>
                      </Link>
                      <Link href="/artigos/liberdade-provisoria">
                        <div className="p-4 bg-white rounded-xl hover:shadow-md transition-shadow cursor-pointer border border-secondary-100">
                          <h4 className="font-semibold text-secondary-800 text-sm mb-2">
                            Liberdade Provisória: Guia Prático
                          </h4>
                          <p className="text-secondary-600 text-xs">
                            Estratégias e casos reais
                          </p>
                        </div>
                      </Link>
                    </div>
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
