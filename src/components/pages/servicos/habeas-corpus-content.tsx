'use client'

import { Container } from '@/components/ui/container'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function HabeasCorpusContent() {
  return (
    <main className="bg-secondary-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-800 to-secondary-900 text-white pt-20 pb-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Habeas Corpus
                </h1>
                <p className="text-xl md:text-2xl text-secondary-300 mb-8 leading-relaxed">
                  Defesa da liberdade contra prisões ilegais, excesso de prazo e constrangimento ilegal. 
                  Atuação rápida e estratégica para garantir seus direitos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton className="text-lg px-8 py-4">
                  INICIAR ATENDIMENTO
                </WhatsAppButton>
                <Button
                  onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  size="lg"
                  className="border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-8 py-4"
                >
                  Saiba Como Funciona
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent-500/20 to-secondary-700/50 rounded-2xl p-8 border border-accent-500/20">
                <div className="text-center">
                  <i className="fa-solid fa-scale-balanced text-6xl text-accent-500 mb-6" aria-hidden="true"></i>
                  <h3 className="text-2xl font-bold mb-4">Liberdade Garantida</h3>
                  <p className="text-secondary-300 text-lg">
                    Mais de 98% de sucesso em pedidos de Habeas Corpus
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Em que se Aplica o Habeas Corpus */}
      <section className="bg-secondary-800 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Em que se Aplica o Habeas Corpus
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Conheça as situações mais comuns onde o Habeas Corpus pode ser utilizado para proteger sua liberdade.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'fa-solid fa-handcuffs',
                title: 'Prisão Ilegal ou Abusiva',
                description: 'Quando há prisão sem fundamento legal, com excesso de prazo ou por autoridade incompetente.',
                examples: 'Prisão em flagrante irregular, excesso de prazo na investigação'
              },
              {
                icon: 'fa-solid fa-clock',
                title: 'Excesso de Prazo Processual',
                description: 'Quando os prazos legais são desrespeitados, mantendo a pessoa presa além do permitido.',
                examples: 'Demora excessiva no julgamento, instrução processual prolongada'
              },
              {
                icon: 'fa-solid fa-ban',
                title: 'Constrangimento Ilegal',
                description: 'Situações onde há ameaça ou violação da liberdade de locomoção sem amparo legal.',
                examples: 'Medidas cautelares abusivas, restrições ilegais de movimento'
              },
              {
                icon: 'fa-solid fa-balance-scale',
                title: 'Nulidades Processuais',
                description: 'Quando há vícios no processo que afetam a validade da prisão ou medida restritiva.',
                examples: 'Decisões sem fundamentação, cerceamento de defesa'
              },
              {
                icon: 'fa-solid fa-file-circle-exclamation',
                title: 'Falta de Justa Causa',
                description: 'Ausência de elementos que justifiquem a manutenção da prisão ou medida cautelar.',
                examples: 'Provas insuficientes, indícios frágeis de autoria'
              },
              {
                icon: 'fa-solid fa-user-shield',
                title: 'Direito de Defesa Violado',
                description: 'Quando há impedimento ao exercício pleno do direito de defesa e contraditório.',
                examples: 'Negativa de acesso aos autos, impedimento de comunicação com advogado'
              }
            ].map((tipo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-900 rounded-xl p-6 hover:bg-secondary-700 transition-all duration-300"
              >
                <div className="text-accent-500 mb-4">
                  <i className={`${tipo.icon} text-3xl`} aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{tipo.title}</h3>
                <p className="text-secondary-300 mb-4 leading-relaxed">{tipo.description}</p>
                <div className="border-t border-secondary-600 pt-4">
                  <p className="text-accent-400 text-sm font-medium">
                    Exemplos: {tipo.examples}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Como Funciona o Processo */}
      <section id="como-funciona" className="bg-secondary-900 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Funciona o Processo
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Um passo a passo claro e transparente para que você saiba exatamente o que esperar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Análise Emergencial',
                description: 'Avaliação imediata do caso, análise da legalidade da prisão e identificação dos fundamentos para o Habeas Corpus.',
                time: 'Em até 2 horas'
              },
              {
                step: '2',
                title: 'Petição e Documentação',
                description: 'Elaboração da petição técnica com fundamentação jurídica sólida e reunião de toda documentação necessária.',
                time: 'Em até 6 horas'
              },
              {
                step: '3',
                title: 'Protocolo e Acompanhamento',
                description: 'Protocolo junto ao tribunal competente e acompanhamento integral até a decisão judicial.',
                time: 'Imediato'
              },
              {
                step: '4',
                title: 'Execução da Decisão',
                description: 'Acompanhamento da execução da ordem judicial e garantia do cumprimento da liberdade concedida.',
                time: 'Até a liberdade'
              }
            ].map((processo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-secondary-800 rounded-xl p-6 text-center"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                  {processo.step}
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold mb-3">{processo.title}</h3>
                  <p className="text-secondary-300 text-sm leading-relaxed mb-4">{processo.description}</p>
                  <div className="bg-accent-500/10 border border-accent-500/20 rounded-lg px-3 py-2">
                    <span className="text-accent-500 font-semibold text-sm">{processo.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Questões Importantes */}
      <section className="bg-secondary-800 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questões Importantes sobre Habeas Corpus
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Esclarecemos as principais dúvidas para que você entenda seus direitos e o processo.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  numero: '01',
                  pergunta: 'Quando posso entrar com Habeas Corpus?',
                  resposta: 'Sempre que houver ameaça ou violação da liberdade de locomoção: prisão ilegal, excesso de prazo, constrangimento ilegal ou ausência de justa causa.'
                },
                {
                  numero: '02',
                  pergunta: 'Quanto tempo demora para ser julgado?',
                  resposta: 'Tem tramitação prioritária e pode ser julgado em horas ou poucos dias. Em casos urgentes, é possível obter liminar imediata para garantir a liberdade.'
                },
                {
                  numero: '03',
                  pergunta: 'Quais são as chances de sucesso?',
                  resposta: 'Com fundamentação adequada e presença dos requisitos legais, as chances são excelentes. Nossa experiência comprova mais de 98% de casos bem-sucedidos.'
                },
                {
                  numero: '04',
                  pergunta: 'Posso ser preso novamente?',
                  resposta: 'Não pela mesma situação. A decisão do Habeas Corpus oferece proteção jurídica contra a repetição do constrangimento que motivou a impetração.'
                },
                {
                  numero: '05',
                  pergunta: 'Qual é o custo do procedimento?',
                  resposta: 'Não há custas judiciais por ser um direito constitucional. Os honorários advocatícios são transparentes e definidos conforme a complexidade.'
                },
                {
                  numero: '06',
                  pergunta: 'Preciso comparecer ao tribunal?',
                  resposta: 'Geralmente não. O advogado representa o cliente em todas as etapas, especialmente importante quando há risco ou impossibilidade de comparecimento.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary-900 rounded-xl p-6 relative overflow-hidden group hover:bg-secondary-700 transition-all duration-300"
                >
                  {/* Número de destaque */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-accent-500/10 group-hover:text-accent-500/20 transition-colors">
                    {item.numero}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-secondary-900 font-bold text-sm">
                        {item.numero}
                      </div>
                      <h3 className="text-lg font-bold text-white">{item.pergunta}</h3>
                    </div>
                    <p className="text-secondary-300 leading-relaxed pl-11">{item.resposta}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Por Que Escolher */}
      <section className="bg-secondary-900 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que a Presença de Uma Advogada Especialista Faz Toda a Diferença
            </h2>
            <p className="text-xl text-secondary-300 max-w-4xl mx-auto">
              A defesa da liberdade exige conhecimento técnico, experiência e agilidade para garantir seus direitos e evitar prejuízos irreversíveis.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'fa-solid fa-graduation-cap',
                title: 'Conhecimento Profundo',
                description: 'Especialização em Direito Penal e Processual Penal com constante atualização jurisprudencial.'
              },
              {
                icon: 'fa-solid fa-chess-knight',
                title: 'Estratégia Personalizada',
                description: 'Cada caso é analisado de forma única, buscando a melhor solução jurídica disponível.'
              },
              {
                icon: 'fa-solid fa-handshake',
                title: 'Atuação Eficaz',
                description: 'Defesa firme e técnica com experiência comprovada em tribunais superiores.'
              },
              {
                icon: 'fa-solid fa-shield-halved',
                title: 'Proteção dos Direitos',
                description: 'Garantia de que todos os direitos constitucionais sejam respeitados e defendidos.'
              },
              {
                icon: 'fa-solid fa-heart',
                title: 'Atendimento Humanizado',
                description: 'Atenção, empatia e clareza em todas as etapas do processo jurídico.'
              },
              {
                icon: 'fa-solid fa-clock',
                title: 'Disponibilidade 24h',
                description: 'Atendimento emergencial para situações urgentes, inclusive finais de semana.'
              }
            ].map((diferencial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-800 rounded-xl p-6 text-center hover:bg-secondary-700 transition-all duration-300"
              >
                <div className="bg-accent-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${diferencial.icon} text-2xl text-accent-500`} aria-hidden="true"></i>
                </div>
                <h3 className="text-lg font-bold mb-3">{diferencial.title}</h3>
                <p className="text-secondary-300 text-sm leading-relaxed">{diferencial.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Final - Seção Combinada */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #111827 60%, #1e293b 100%)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-gradient-to-br from-accent-500/10 to-secondary-700/30 border border-accent-500/20 rounded-3xl overflow-hidden">
              {/* Foto Mobile - Topo */}
              <div className="relative lg:hidden">
                <div className="h-64 relative">
                  <img
                    src="/images/sobre/dra-diulliany-sobre.webp"
                    alt="Dra. Diulliany Ferro - Advocacia Criminal"
                    className="absolute inset-0 w-full h-full object-cover object-top rounded-t-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary-900/80 rounded-t-3xl"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-secondary-900/90 border border-accent-500/20 px-4 py-2 rounded-lg">
                    <p className="text-accent-500 font-semibold text-sm text-center">Dra. Diulliany Ferro</p>
                    <p className="text-white text-xs text-center">OAB/GO 66.387</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Coluna Esquerda - Foto Desktop */}
                <div className="relative lg:block hidden">
                  <div className="h-full min-h-[500px] relative">
                    <img
                      src="/images/sobre/dra-diulliany-sobre.webp"
                      alt="Dra. Diulliany Ferro - Advocacia Criminal"
                      className="absolute inset-0 w-full h-full object-cover object-top rounded-l-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-secondary-700/80 rounded-l-3xl"></div>
                    <div className="absolute bottom-6 left-6 bg-secondary-900/90 border border-accent-500/20 px-4 py-2 rounded-lg">
                      <p className="text-accent-500 font-semibold text-sm">Dra. Diulliany Ferro</p>
                      <p className="text-white text-xs">OAB/GO 66.387</p>
                    </div>
                  </div>
                </div>

                {/* Coluna Central - Profile */}
                <div className="p-6 md:p-8 lg:p-8 xl:p-12 lg:col-span-1">
                  <div className="mb-6 lg:mb-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 lg:mb-4 text-accent-500 lg:hidden">
                      Dra. Diulliany Ferro
                    </h3>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 lg:mb-4 text-accent-500 hidden lg:block">
                      Dra. Diulliany Ferro
                    </h3>
                    <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Sua Melhor Escolha para Defesa da Liberdade</h4>
                    <p className="text-secondary-300 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                      Advogada especialista em Direito Criminal, com experiência comprovada em Habeas Corpus 
                      e defesa da liberdade, oferecendo atendimento humanizado e resultados excepcionais.
                    </p>
                  </div>

                  <div className="space-y-2 lg:space-y-3">
                    {[
                      'Acompanhamento personalizado e próximo',
                      'Linguagem clara e acessível',
                      'Atuação estratégica com foco em resultados',
                      'Comunicação constante e transparente'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                        <span className="text-secondary-200 text-sm lg:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Coluna Direita - CTA */}
                <div className="p-6 md:p-8 lg:p-8 xl:p-12 bg-secondary-800/30 lg:col-span-1">
                  <h2 className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold mb-4 lg:mb-6">
                    Sua Liberdade Está em Risco?
                  </h2>
                  
                  <p className="text-secondary-300 mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">
                    Conte com orientação especializada para impetrar <span className="text-white font-semibold">Habeas Corpus</span> e 
                    proteger seus direitos constitucionais com <span className="text-white font-semibold">agilidade e eficácia</span>.
                  </p>

                  <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                    <WhatsAppButton className="w-full text-sm lg:text-base px-4 lg:px-6 py-3">
                      INICIAR ATENDIMENTO
                    </WhatsAppButton>
                    <Button
                      onClick={() => document.getElementById('outros-servicos')?.scrollIntoView({ behavior: 'smooth' })}
                      variant="outline"
                      className="w-full border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-4 lg:px-6 py-3 text-sm lg:text-base"
                    >
                      Ver Outros Serviços
                    </Button>
                  </div>

                  <div className="text-center">
                    <p className="text-accent-500 font-semibold text-xs lg:text-sm">
                      <i className="fa-solid fa-clock mr-2" aria-hidden="true"></i>
                      Atendimento 24 horas • Resposta imediata
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
