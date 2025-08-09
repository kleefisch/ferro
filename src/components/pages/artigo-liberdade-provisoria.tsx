'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Phone, AlertTriangle, CheckCircle, Eye, Shield } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { ShareButtons } from '@/components/ui/share-buttons'
import Link from 'next/link'

export function ArtigoLiberdadeProvisoria() {
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
                Habeas Corpus
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              Liberdade Provisória: Por Que <span className="text-accent-400">Cada Minuto</span> Conta na Sua Defesa
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
                <span>8 de Agosto de 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Leitura de 4 min</span>
              </div>
            </motion.div>

            {/* Botão de Compartilhar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ShareButtons 
                title="Liberdade Provisória: Por Que Cada Minuto Conta na Sua Defesa"
                description="Descubra como a agilidade na solicitação da liberdade provisória pode ser decisiva. Casos reais mostram como uma estratégia bem executada mudou vidas."
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Imagem Hero com estatística impactante */}
      <section className="relative h-80 bg-gradient-to-br from-accent-600 to-accent-800 text-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4"
            >
              <div className="text-6xl font-bold mb-2">72h</div>
              <div className="text-xl font-semibold">Prazo crítico para solicitar liberdade provisória</div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm opacity-80">⏰ Cada hora perdida pode comprometer sua liberdade</p>
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
                  {/* Hook Emocional */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="text-red-800 font-bold mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      A Ligação Que Mudou Tudo
                    </h3>
                    <p className="text-red-700 italic">
                      "Era sábado, 14h30. O telefone tocou. Do outro lado, uma mãe desesperada: 'Doutora, meu filho foi preso ontem à noite. Disseram que só segunda-feira pode fazer alguma coisa. Isso é verdade?' 
                      Não. Não é verdade. E essa diferença entre sexta e segunda-feira pode decidir se uma pessoa passa 72 horas ou 72 dias atrás das grades."
                    </p>
                  </div>

                  {/* Introdução Envolvente */}
                  <p className="text-xl leading-relaxed text-secondary-700 mb-8 font-medium">
                    Se você está lendo este artigo, provavelmente alguém próximo está enfrentando o pior momento de sua vida. A prisão preventiva não é apenas uma medida judicial – é uma bomba-relógio que explode não apenas a vida do preso, mas de toda a família.
                  </p>

                  <p className="mb-8 text-secondary-700">
                    <strong>Mas aqui está a verdade que poucos advogados vão te contar:</strong> existe uma janela de oportunidade que, se perdida, pode transformar dias em meses, e meses em anos de sofrimento desnecessário.
                  </p>

                  {/* Seção com storytelling */}
                  <div className="bg-gradient-to-r from-secondary-50 to-accent-50 p-8 rounded-2xl mb-8 border border-secondary-100">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4 flex items-center">
                      <Eye className="w-6 h-6 mr-3 text-accent-600" />
                      O Que Vi Aos Meus Olhos
                    </h3>
                    <p className="text-secondary-700 mb-4">
                      Em 15 anos de advocacia criminal, presenciei centenas de casos. Vi famílias se desfazerem, negócios fecharem as portas, e sonhos sendo despedaçados – não pelo crime em si, mas pela <em>demora na defesa</em>.
                    </p>
                    <p className="text-secondary-700">
                      Também vi o oposto: pedidos de liberdade provisória concedidos em <strong>menos de 48 horas</strong>, transformando desespero em alívio, lágrimas de angústia em lágrimas de gratidão.
                    </p>
                  </div>

                  {/* A urgência explicada */}
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6 flex items-center">
                    <span className="bg-accent-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4">1</span>
                    Por Que o Tempo É Seu Maior Aliado (ou Inimigo)
                  </h2>

                  <div className="bg-accent-50 border-l-4 border-accent-500 p-6 mb-8 rounded-r-lg">
                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-accent-700 mr-3 mt-1" />
                      <div>
                        <p className="text-accent-800 font-medium mb-2">💡 Dica de Especialista:</p>
                        <p className="text-accent-700">
                          Juízes tendem a ser mais receptivos a pedidos de liberdade provisória quando são apresentados <strong>rapidamente após a prisão</strong>. Isso demonstra organização da defesa e respeito ao processo.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mb-6">
                    Aqui está o que acontece nos bastidores: quando uma pessoa é presa, inicia-se uma corrida contra o tempo. <strong>Nas primeiras 72 horas</strong>, o juiz ainda está "fresh" no caso, os documentos estão sendo organizados, e existe uma janela natural para intervenção.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h4 className="font-bold text-green-800 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Ação Rápida (0-72h)
                      </h4>
                      <ul className="text-green-700 space-y-2 text-sm">
                        <li>• Juiz ainda está analisando o caso</li>
                        <li>• Documentos organizados rapidamente</li>
                        <li>• Maior chance de audiência urgente</li>
                        <li>• Demonstra seriedade da defesa</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Demora (7+ dias)
                      </h4>
                      <ul className="text-red-700 space-y-2 text-sm">
                        <li>• Caso "esfriar" na pilha do juiz</li>
                        <li>• Precedente de "não urgência"</li>
                        <li>• Mais tempo para promotoria se organizar</li>
                        <li>• Situação prisional se consolidar</li>
                      </ul>
                    </div>
                  </div>

                  {/* Caso real dramatizado */}
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6 flex items-center">
                    <span className="bg-accent-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4">2</span>
                    O Caso Que Me Ensinou Essa Lição
                  </h2>

                  <div className="bg-secondary-50 p-8 rounded-2xl mb-8 border border-secondary-200">
                    <p className="text-secondary-700 mb-4 italic">
                      "Carlos* era empresário, pai de duas filhas pequenas. Foi preso numa sexta-feira por suspeita de sonegação fiscal. A família me procurou na segunda-feira."
                    </p>
                    <p className="text-secondary-700 mb-4">
                      <strong>O que aconteceu:</strong> Entramos com o pedido na terça. O juiz indeferiu, alegando que "a defesa teve tempo para se organizar, mas não demonstrou urgência". Carlos ficou preso por 4 meses até conseguirmos reverter em segunda instância.
                    </p>
                    <p className="text-secondary-700 mb-4">
                      <strong>A reviravolta:</strong> Seis meses depois, caso similar. Desta vez, fui acionada no sábado de manhã. Pedido protocolado domingo à noite. Segunda-feira, 10h: liberdade concedida.
                    </p>
                    <p className="text-secondary-700 text-sm">
                      *Nome fictício para preservar a privacidade
                    </p>
                  </div>

                  {/* Estratégias práticas */}
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6 flex items-center">
                    <span className="bg-accent-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4">3</span>
                    A Estratégia dos Primeiros Movimentos
                  </h2>

                  <p className="mb-6">
                    Liberdade provisória não é apenas sobre preencher formulários. É sobre construir um <strong>caso convincente</strong> em tempo recorde. Aqui estão os pilares que utilizo:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="border-l-4 border-accent-500 pl-6">
                      <h4 className="font-bold text-secondary-900 mb-2">🎯 Análise Imediata do Flagrante</h4>
                      <p className="text-secondary-700 text-sm">
                        Identificar possíveis ilegalidades na prisão que podem invalidar todo o processo. Cada detalhe importa: horário, local, testemunhas, procedimentos.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-accent-500 pl-6">
                      <h4 className="font-bold text-secondary-900 mb-2">📋 Dossiê de Antecedentes</h4>
                      <p className="text-secondary-700 text-sm">
                        Reunir rapidamente: certidões negativas, comprovantes de trabalho, declarações de vizinhos, atestados médicos. O objetivo é humanizar o preso perante o juiz.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-accent-500 pl-6">
                      <h4 className="font-bold text-secondary-900 mb-2">⚖️ Fundamentação Jurídica Sólida</h4>
                      <p className="text-secondary-700 text-sm">
                        Não basta citar a lei. É preciso demonstrar que os requisitos da prisão preventiva não estão presentes, usando jurisprudência atualizada e argumentos personalizados.
                      </p>
                    </div>
                  </div>

                  {/* Alertas importantes */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
                    <h4 className="text-yellow-800 font-bold mb-3">⚠️ Cuidados Que Podem Salvar Seu Caso</h4>
                    <div className="text-yellow-700 space-y-2 text-sm">
                      <p><strong>❌ Nunca faça:</strong> Pressionar o juiz com apelos emocionais vazios</p>
                      <p><strong>❌ Nunca faça:</strong> Protocolar pedidos genéricos "de gaveta"</p>
                      <p><strong>❌ Nunca faça:</strong> Subestimar a importância da documentação</p>
                      <p className="mt-4"><strong>✅ Sempre faça:</strong> Busque advogado especializado imediatamente</p>
                    </div>
                  </div>

                  {/* Seção emocional de fechamento */}
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6 flex items-center">
                    <span className="bg-accent-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4">4</span>
                    O Que Está Realmente em Jogo
                  </h2>

                  <p className="mb-6 text-secondary-700">
                    Não é apenas sobre sair da prisão. É sobre preservar dignidade, emprego, relacionamentos familiares. É sobre evitar que uma acusação se transforme em uma sentença de vida.
                  </p>

                  <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-primary-700 font-medium">
                      <strong>Lembre-se:</strong> Cada dia na prisão é um dia a menos com a família, um dia a menos construindo sua defesa em liberdade, um dia a mais de sofrimento que poderia ser evitado.
                    </p>
                  </div>

                  {/* Conclusão forte */}
                  <div className="bg-gradient-to-r from-secondary-900 to-secondary-800 p-8 rounded-2xl mb-12 text-white">
                    <h3 className="text-xl font-bold mb-4 text-accent-300">A Verdade Que Precisa Ser Dita</h3>
                    <p className="mb-4">
                      Em questões de liberdade, não existe "segunda chance" para uma primeira impressão. O primeiro pedido de liberdade provisória é, frequentemente, o mais importante de todos.
                    </p>
                    <p className="text-secondary-300">
                      Como advogada criminalista, meu compromisso não é apenas com a técnica jurídica – é com a vida humana por trás de cada processo. Porque quando falamos de liberdade provisória, estamos falando de <strong>tempo que não volta</strong>.
                    </p>
                  </div>

                  {/* Sobre a Autora */}
                  <div className="bg-white border border-secondary-200 rounded-xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        DF
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-secondary-900 mb-2">Dra. Diulliany Ferro</h4>
                        <p className="text-secondary-600 mb-4">
                          Advogada criminalista há 15 anos, especializada em habeas corpus e liberdade provisória. Já conquistou mais de 200 liberdades provisórias, sempre priorizando a agilidade e a estratégia personalizada para cada caso.
                        </p>
                        <div className="flex gap-4">
                          <Link href="/sobre">
                            <Button variant="outline" size="sm">
                              Conheça minha trajetória
                            </Button>
                          </Link>
                          <Link href="#contato">
                            <Button size="sm" className="bg-accent-500 hover:bg-accent-600 text-white">
                              Preciso de ajuda urgente
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
                  {/* CTA de Urgência */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 rounded-xl border-2 border-red-400 relative"
                  >
                    <div className="absolute -top-2 -right-2 bg-yellow-400 text-red-900 px-3 py-1 rounded-full text-xs font-bold">
                      URGENTE
                    </div>
                    <h3 className="text-lg font-bold mb-3">
                      Alguém Foi Preso?
                    </h3>
                    <p className="text-red-100 text-sm mb-4">
                      <strong>Não espere até segunda!</strong> Atendimento 24h para casos urgentes de liberdade provisória.
                    </p>
                    <p className="text-red-100 text-sm mb-6">
                      Cada hora conta. Nossa equipe está preparada para agir imediatamente, mesmo fins de semana e feriados.
                    </p>
                    <WhatsAppButton 
                      className="w-full bg-white hover:bg-yellow-50 text-red-700 border-0 mb-3 font-bold"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      LIGAÇÃO DE EMERGÊNCIA
                    </WhatsAppButton>
                    <p className="text-xs text-red-200 text-center">
                      📱 Resposta em até 30 minutos
                    </p>
                  </motion.div>

                  {/* Timeline de Ação */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white border border-secondary-200 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-secondary-900 mb-4">
                      ⏱️ Timeline de Ação
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start">
                        <div className="bg-green-500 w-3 h-3 rounded-full mr-3 mt-1"></div>
                        <div>
                          <p className="font-medium text-secondary-900">0-2h após prisão</p>
                          <p className="text-secondary-600">Contato com advogado especializado</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-yellow-500 w-3 h-3 rounded-full mr-3 mt-1"></div>
                        <div>
                          <p className="font-medium text-secondary-900">2-24h</p>
                          <p className="text-secondary-600">Análise do caso e coleta de documentos</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-red-500 w-3 h-3 rounded-full mr-3 mt-1"></div>
                        <div>
                          <p className="font-medium text-secondary-900">24-72h</p>
                          <p className="text-secondary-600">Protocolo do pedido de liberdade</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Artigos Relacionados */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-accent-50 border border-accent-200 rounded-xl p-6"
                  >
                    <h3 className="text-lg font-bold text-accent-800 mb-4">
                      📚 Leitura Recomendada
                    </h3>
                    <div className="space-y-3">
                      <Link href="/artigos/prisao-em-flagrante">
                        <div className="text-sm text-accent-700 hover:text-accent-800 cursor-pointer">
                          • Fui Preso em Flagrante: Meus Direitos
                        </div>
                      </Link>
                      <div className="text-sm text-accent-600">
                        • Audiência de Custódia: O que Esperar (em breve)
                      </div>
                      <div className="text-sm text-accent-600">
                        • Medidas Cautelares Alternativas (em breve)
                      </div>
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
