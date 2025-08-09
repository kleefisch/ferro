'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Award, CheckCircle, Info, Star, Scale, FileText, Shield, Users, Home, Briefcase } from 'lucide-react'
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
                    <span className="text-sm">Leitura de 8 min</span>
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
                    <p className="text-xl leading-relaxed text-secondary-800 mb-6 font-medium">
                      No sistema jurídico brasileiro, ser acusado de um crime não significa automaticamente a privação da liberdade. 
                      O princípio da presunção de inocência garante que ninguém será considerado culpado antes de uma sentença 
                      condenatória definitiva.
                    </p>
                    <p className="text-secondary-700 leading-relaxed mb-4">
                      É nesse contexto que a Liberdade Provisória surge como um direito fundamental, permitindo que o acusado 
                      responda ao processo em liberdade, sob certas condições. Este direito visa harmonizar a liberdade individual 
                      com a necessidade de segurança pública e o andamento da justiça.
                    </p>
                    <p className="text-secondary-700 leading-relaxed">
                      Compreender profundamente esse processo é essencial para quem enfrenta uma situação judicial complexa, 
                      pois permite tomar decisões estratégicas e informadas sobre os próximos passos.
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

                    <p className="mb-8 text-secondary-700 leading-relaxed">
                      A liberdade provisória é uma medida cautelar que permite ao investigado ou acusado aguardar o julgamento 
                      em liberdade, sem a necessidade de prisão preventiva. Ela representa um equilíbrio delicado entre 
                      o direito fundamental à liberdade individual e as necessidades do processo judicial.
                    </p>

                    <p className="mb-6 text-secondary-700 leading-relaxed">
                      O Código de Processo Penal estabelece as condições para sua concessão, que podem ser com ou sem fiança, 
                      ou ainda, com a imposição de medidas cautelares diversas da prisão. É importante compreender que este 
                      direito reconhece que toda pessoa é inocente até que se prove o contrário de forma definitiva.
                    </p>

                    <div className="bg-gradient-to-br from-white to-secondary-50 border border-accent-200 rounded-3xl p-8 shadow-lg mb-8 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent-500 to-accent-600"></div>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mr-4 shadow-md">
                          <Info className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-2xl font-bold text-secondary-900">Importante saber</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="group">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h5 className="font-bold text-secondary-900 mb-2">É uma ferramenta especializada</h5>
                              <p className="text-secondary-700 text-sm">Permite aguardar julgamento em liberdade com garantias do processo</p>
                            </div>
                          </div>
                        </div>
                        <div className="group">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                              <Scale className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h5 className="font-bold text-secondary-900 mb-2">Pode ter condições específicas</h5>
                              <p className="text-secondary-700 text-sm">O juiz pode impor fiança ou outras regras conforme o caso</p>
                            </div>
                          </div>
                        </div>
                        <div className="group">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                              <Shield className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h5 className="font-bold text-secondary-900 mb-2">Requer análise jurídica especializada</h5>
                              <p className="text-secondary-700 text-sm">Precisa ser solicitada através de advogado criminalista experiente</p>
                            </div>
                          </div>
                        </div>
                        <div className="group">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                              <Users className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h5 className="font-bold text-secondary-900 mb-2">Avaliação individual do magistrado</h5>
                              <p className="text-secondary-700 text-sm">Cada situação é analisada considerando critérios legais específicos</p>
                            </div>
                          </div>
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
                      A concessão da liberdade provisória depende da análise criteriosa de alguns fatores pelo magistrado, 
                      principalmente a ausência dos requisitos para a prisão preventiva. O juiz avalia diversos elementos 
                      para determinar se é seguro e apropriado permitir que o acusado responda ao processo em liberdade.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
                      <h4 className="font-bold text-blue-800 mb-4">📋 Critérios de Análise Judicial</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h6 className="font-semibold text-blue-700 mb-2">• Inexistência de motivos para prisão preventiva</h6>
                          <p className="text-blue-600">Análise se há risco para ordem pública, instrução criminal ou aplicação da lei penal</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-blue-700 mb-2">• Natureza e gravidade do delito</h6>
                          <p className="text-blue-600">Avaliação do tipo de crime e suas circunstâncias específicas</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-blue-700 mb-2">• Antecedentes do acusado</h6>
                          <p className="text-blue-600">Histórico criminal, conduta social e vínculos com a comunidade</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-blue-700 mb-2">• Possibilidade de medidas alternativas</h6>
                          <p className="text-blue-600">Avaliação se outras medidas cautelares são suficientes para o caso</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                        <h4 className="font-bold text-green-800 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Situações Favoráveis
                        </h4>
                        <ul className="space-y-2 text-green-700 text-sm">
                          <li>• <strong>Primariedade e bons antecedentes:</strong> Ausência de condenações anteriores</li>
                          <li>• <strong>Residência fixa e vínculos familiares:</strong> Demonstração de enraizamento social</li>
                          <li>• <strong>Ocupação lícita regular:</strong> Trabalho ou atividade profissional comprovada</li>
                          <li>• <strong>Crime sem violência ou grave ameaça:</strong> Delitos de menor potencial ofensivo</li>
                          <li>• <strong>Inexistência de risco de fuga:</strong> Não há indícios de tentativa de evasão</li>
                          <li>• <strong>Não interferência na investigação:</strong> Sem risco de destruição de provas ou ameaça a testemunhas</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                        <h4 className="font-bold text-blue-800 mb-3">
                          Modalidades de Liberdade Provisória
                        </h4>
                        <div className="space-y-3 text-blue-700 text-sm">
                          <div>
                            <h6 className="font-semibold mb-1">🏦 Com Fiança</h6>
                            <p>Pagamento de valor pecuniário fixado pelo juiz como garantia</p>
                          </div>
                          <div>
                            <h6 className="font-semibold mb-1">📋 Sem Fiança</h6>
                            <p>Concessão baseada apenas nos critérios legais, sem pagamento</p>
                          </div>
                          <div>
                            <h6 className="font-semibold mb-1">⚖️ Com Medidas Cautelares</h6>
                            <p>Imposição de condições específicas para garantir o comparecimento</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                        <h4 className="font-bold text-orange-800 mb-3">
                          Medidas Cautelares Alternativas
                        </h4>
                        <ul className="space-y-2 text-orange-700 text-sm">
                          <li>• <strong>Comparecimento periódico em juízo:</strong> Apresentação regular conforme determinação</li>
                          <li>• <strong>Proibição de acesso a locais:</strong> Restrição a determinados lugares</li>
                          <li>• <strong>Proibição de contato:</strong> Vedação de comunicação com pessoas específicas</li>
                          <li>• <strong>Monitoramento eletrônico:</strong> Uso de tornozeleira eletrônica</li>
                          <li>• <strong>Recolhimento domiciliar noturno:</strong> Permanência em casa em horários determinados</li>
                          <li>• <strong>Suspensão de atividades:</strong> Interrupção temporária de função pública ou atividade econômica</li>
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

                    <p className="mb-8 text-secondary-700 leading-relaxed">
                      O pedido de liberdade provisória pode ser feito de ofício pelo juiz, pelo Ministério Público, 
                      ou, mais comumente, pela defesa do acusado. É crucial que o pedido seja elaborado por um 
                      advogado criminalista com experiência, pois ele possui o conhecimento técnico necessário 
                      para apresentar os melhores argumentos jurídicos para cada caso específico.
                    </p>

                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-8">
                      <h4 className="font-bold text-purple-800 mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Por Que a Experiência do Advogado Criminalista é Fundamental
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h6 className="font-semibold text-purple-700 mb-2">🔍 Análise técnica do flagrante</h6>
                          <p className="text-purple-600">Verificação da legalidade da prisão e identificação de vícios processuais</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-purple-700 mb-2">📝 Argumentação jurídica especializada</h6>
                          <p className="text-purple-600">Apresentação de fundamentos legais sólidos para convencer o magistrado</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-purple-700 mb-2">⚡ Agilidade processual</h6>
                          <p className="text-purple-600">Rapidez na apresentação do pedido, especialmente após prisão em flagrante</p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-purple-700 mb-2">🎯 Estratégia personalizada</h6>
                          <p className="text-purple-600">Adequação das medidas cautelares ao perfil e situação do cliente</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-2xl p-8 mb-8 border border-secondary-100">
                      <h4 className="font-bold text-secondary-900 mb-6 text-center text-xl">
                        Processo Passo a Passo
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-white font-bold">1</span>
                          </div>
                          <h5 className="font-semibold text-secondary-800 mb-2">Análise Jurídica Completa</h5>
                          <p className="text-secondary-600 text-sm">Avaliação detalhada da legalidade da prisão e viabilidade da liberdade provisória</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-white font-bold">2</span>
                          </div>
                          <h5 className="font-semibold text-secondary-800 mb-2">Reunião de Provas</h5>
                          <p className="text-secondary-600 text-sm">Coleta estratégica de documentos e evidências que demonstrem vínculos sociais</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-white font-bold">3</span>
                          </div>
                          <h5 className="font-semibold text-secondary-800 mb-2">Petição Fundamentada</h5>
                          <p className="text-secondary-600 text-sm">Elaboração técnica do pedido com argumentação jurídica sólida e personalizada</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
                      <h4 className="font-bold text-red-800 mb-3">⏰ Timing Crítico: A Importância da Celeridade</h4>
                      <div className="space-y-3 text-red-700 text-sm">
                        <p>
                          <strong>Audiência de Custódia:</strong> O pedido deve ser apresentado preferencialmente 
                          durante a audiência de custódia, que ocorre em até 24 horas após a prisão.
                        </p>
                        <p>
                          <strong>Período Posterior:</strong> Mesmo após a audiência, o pedido pode ser feito a 
                          qualquer momento durante o processo, mas a rapidez aumenta significativamente as chances de sucesso.
                        </p>
                        <p>
                          <strong>Estratégia Processual:</strong> A agilidade permite aproveitar o momento em que o 
                          caso ainda não foi totalmente analisado pelos órgãos de acusação.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                      <h4 className="font-bold text-yellow-800 mb-3">⚠️ Atenção Importante</h4>
                      <p className="text-yellow-700 text-sm leading-relaxed">
                        O tempo é um fator crucial. Quanto mais rapidamente o pedido for apresentado após a prisão, 
                        maiores são as chances de sucesso. A experiência do advogado criminalista é determinante 
                        para identificar o momento ideal e a estratégia mais eficaz para cada caso específico.
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

                    <p className="mb-8 text-secondary-700 leading-relaxed">
                      Para fortalecer o pedido de liberdade provisória, alguns documentos são fundamentais. 
                      Eles ajudam a demonstrar os vínculos da pessoa com a sociedade, sua idoneidade e a 
                      desnecessidade da manutenção da prisão. A apresentação organizada e estratégica desses 
                      documentos pode ser decisiva para o deferimento do pedido.
                    </p>

                    <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
                      <h4 className="font-bold text-teal-800 mb-4">🎯 Estratégia Documental</h4>
                      <p className="text-teal-700 text-sm mb-4">
                        A documentação deve ser apresentada de forma a construir um perfil sólido do acusado, 
                        demonstrando seus vínculos sociais e a baixa probabilidade de risco para a sociedade.
                      </p>
                      <div className="grid md:grid-cols-3 gap-4 text-xs">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold">📋</span>
                          </div>
                          <h6 className="font-semibold text-teal-700">Documentação Pessoal</h6>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold">🏠</span>
                          </div>
                          <h6 className="font-semibold text-teal-700">Vínculos Sociais</h6>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-white font-bold">⚖️</span>
                          </div>
                          <h6 className="font-semibold text-teal-700">Antecedentes</h6>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-white border border-secondary-200 rounded-2xl p-6 shadow-sm">
                        <h5 className="font-semibold text-secondary-900 mb-4">📄 Documentos Pessoais</h5>
                        <ul className="space-y-2 text-secondary-700 text-sm">
                          <li>• <strong>RG e CPF:</strong> Identificação oficial válida</li>
                          <li>• <strong>Comprovante de residência:</strong> Demonstração de domicílio fixo</li>
                          <li>• <strong>Certidão de nascimento/casamento:</strong> Estado civil e vínculos familiares</li>
                          <li>• <strong>Atestado de antecedentes criminais:</strong> Comprovação de primariedade</li>
                          <li>• <strong>Certidões de distribução:</strong> Ausência de outros processos</li>
                        </ul>
                      </div>

                      <div className="bg-white border border-secondary-200 rounded-2xl p-6 shadow-sm">
                        <h5 className="font-semibold text-secondary-900 mb-4">💼 Vínculos Profissionais</h5>
                        <ul className="space-y-2 text-secondary-700 text-sm">
                          <li>• <strong>Carteira de trabalho:</strong> Histórico profissional</li>
                          <li>• <strong>Declaração de emprego:</strong> Situação atual de trabalho</li>
                          <li>• <strong>Comprovante de renda:</strong> Estabilidade financeira</li>
                          <li>• <strong>Contratos de trabalho:</strong> Vínculos empregatícios formais</li>
                          <li>• <strong>Registro profissional:</strong> Inscrições em conselhos de classe</li>
                        </ul>
                      </div>

                      <div className="bg-white border border-secondary-200 rounded-2xl p-6 shadow-sm">
                        <h5 className="font-semibold text-secondary-900 mb-4">🏠 Vínculos Sociais</h5>
                        <ul className="space-y-2 text-secondary-700 text-sm">
                          <li>• <strong>Declarações familiares:</strong> Apoio de pessoas próximas</li>
                          <li>• <strong>Comprovante de dependentes:</strong> Responsabilidades familiares</li>
                          <li>• <strong>Atestados médicos:</strong> Condições de saúde relevantes</li>
                          <li>• <strong>Participação comunitária:</strong> Atividades sociais ou religiosas</li>
                          <li>• <strong>Referências pessoais:</strong> Testemunhas de boa conduta</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Seção 5 - Nova seção sobre Fiança */}
                  <div className="mb-16">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mr-6 shadow-lg">
                        <span className="text-white font-bold text-lg">5</span>
                      </div>
                      <h2 className="text-3xl font-bold text-secondary-900">
                        Como Funciona a Fiança
                      </h2>
                    </div>

                    <p className="mb-6 text-secondary-700 leading-relaxed">
                      A fiança é um valor pecuniário pago pelo acusado como garantia de que ele comparecerá 
                      a todos os atos do processo e não fugirá. O valor da fiança é fixado pelo juiz, considerando 
                      a natureza do crime, as condições financeiras do acusado e a gravidade da conduta.
                    </p>

                    <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 mb-8">
                      <h4 className="font-bold text-indigo-800 mb-6 text-center text-xl">
                        Critérios para Fixação do Valor da Fiança
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h6 className="font-semibold text-indigo-700 mb-3 flex items-center">
                            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-xs">💰</span>
                            </div>
                            Situação Financeira
                          </h6>
                          <p className="text-indigo-600 text-sm">
                            Análise da capacidade econômica do acusado para estabelecer valor proporcional
                          </p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-indigo-700 mb-3 flex items-center">
                            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-xs">⚖️</span>
                            </div>
                            Gravidade do Delito
                          </h6>
                          <p className="text-indigo-600 text-sm">
                            Consideração da natureza e circunstâncias do crime praticado
                          </p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-indigo-700 mb-3 flex items-center">
                            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-xs">👤</span>
                            </div>
                            Antecedentes Pessoais
                          </h6>
                          <p className="text-indigo-600 text-sm">
                            Histórico criminal e conduta social anterior do acusado
                          </p>
                        </div>
                        <div>
                          <h6 className="font-semibold text-indigo-700 mb-3 flex items-center">
                            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-xs">🏃</span>
                            </div>
                            Risco de Fuga
                          </h6>
                          <p className="text-indigo-600 text-sm">
                            Avaliação da probabilidade de o acusado tentar se evadir
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                      <h4 className="font-bold text-green-800 mb-4">💡 Importante Sobre a Fiança</h4>
                      <div className="space-y-3 text-green-700 text-sm">
                        <p>
                          <strong>Valor Justo:</strong> A fiança deve ser proporcional à situação financeira do acusado, 
                          não podendo ser nem irrisória nem impossível de ser paga.
                        </p>
                        <p>
                          <strong>Modalidades de Pagamento:</strong> Pode ser paga em dinheiro, através de seguro-garantia 
                          ou mediante hipoteca de bem imóvel.
                        </p>
                        <p>
                          <strong>Devolução:</strong> O valor é devolvido ao final do processo, desde que o acusado 
                          tenha cumprido todas as condições impostas.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusão elegante */}
                  <div className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white p-10 rounded-2xl mb-12 shadow-xl">
                    <h3 className="text-2xl font-bold mb-6 text-center">
                      <span className="text-accent-300">Considerações Finais</span>
                    </h3>
                    <p className="mb-6 leading-relaxed text-secondary-100">
                      A liberdade provisória é um pilar fundamental da justiça criminal brasileira que busca evitar 
                      prisões desnecessárias e garantir o direito de defesa em liberdade. Este direito harmoniza 
                      a necessidade de segurança pública com a presunção de inocência, permitindo que o acusado 
                      responda ao processo sem a privação antecipada da liberdade.
                    </p>
                    <p className="mb-6 leading-relaxed text-secondary-200">
                      No entanto, sua obtenção é uma batalha jurídica complexa que exige estratégia, conhecimento 
                      técnico especializado e agilidade processual. A análise criteriosa dos critérios legais, 
                      a documentação adequada e a argumentação jurídica sólida são elementos decisivos para o sucesso.
                    </p>
                    <p className="leading-relaxed text-secondary-200 text-center font-medium">
                      Contar com um advogado criminalista experiente e competente é o passo decisivo para 
                      proteger sua liberdade e garantir um processo justo, respeitando todos os direitos 
                      fundamentais assegurados pela Constituição Federal.
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
                        "Documentos Necessários",
                        "Como Funciona a Fiança"
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
