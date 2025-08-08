'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function SobreContent() {
  return (
    <main className="bg-secondary-900 text-white">
      {/* Hero da página */}
      <section className="bg-secondary-800 text-white py-20 border-b border-secondary-700">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Foto profissional */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-lg mx-auto lg:mx-0"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary-800">
                <Image
                  src="/images/sobre/dra-diulliany-sobre.webp"
                  alt="Dra. Diulliany Ferro - Advocacia Criminal"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 540px, 100vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-accent-500/10 to-transparent" />
              </div>
            </motion.div>

            {/* Conteúdo do Hero */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Citação em destaque */}
              <div className="bg-secondary-900/80 border-l-4 border-accent-500 p-6 rounded-r-xl">
                <blockquote className="text-lg md:text-xl italic text-secondary-200 mb-4">
                  &ldquo;Minha missão é defender cada cliente com técnica e humanidade, porque atrás de cada processo há uma vida que merece respeito e justiça.&rdquo;
                </blockquote>
                <cite className="text-accent-500 font-semibold">— Dra. Diulliany Ferro</cite>
              </div>

              {/* Título e subtítulo */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Defesa Criminal com Compromisso e Excelência
                </h1>
                <h2 className="text-lg md:text-xl text-secondary-300 leading-relaxed">
                  Conheça a Dra. Diulliany Ferro — atuação técnica, estratégica e humana, focada em resultados concretos e na proteção dos seus direitos.
                </h2>
              </div>

              {/* CTAs iniciais */}
              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton className="w-full sm:w-auto">FALE AGORA COMIGO</WhatsAppButton>
                <Button
                  onClick={() => document.getElementById('pilares')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="w-full sm:w-auto border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
                >
                  Conheça Minha Atuação
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Seção 1 — Quem é a Dra. Diulliany Ferro e Credenciais */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-scale-balanced text-accent-500 text-2xl mt-1" aria-hidden="true"></i>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Quem é a Dra. Diulliany Ferro</h3>
                  <div className="space-y-6 text-secondary-300 text-lg leading-relaxed">
                    <p>
                      A <span className="text-white font-semibold">Dra. Diulliany Ferro</span> é advogada criminalista com <span className="text-white font-semibold">sólida formação em Direito Penal e Processual Penal</span>, atuando com seriedade, agilidade e absoluto profissionalismo em todas as fases do processo — <span className="text-white font-semibold">desde a investigação até o julgamento</span>.
                    </p>
                    <p>
                      Com <span className="text-accent-500 font-semibold">registro ativo na OAB/GO 66.387</span>, a Dra. Diulliany também é <span className="text-white font-semibold">membro da Comissão de Direito Criminal (CDCRIM) da OAB/GO</span>, participando ativamente das discussões e desenvolvimento do Direito Penal no estado.
                    </p>
                    <p>
                      Sua formação inclui <span className="text-white font-semibold">diversos cursos e especializações</span> que garantem constante atualização e excelência técnica, sobretudo em <span className="text-accent-500 font-semibold">defesa perante o Tribunal do Júri</span>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Seção 2 — Missão e Pilares da Atuação */}
      <section id="pilares" className="bg-secondary-800 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Missão e Pilares da Atuação</h3>
            <p className="text-secondary-300 text-lg max-w-3xl mx-auto">
              Conheça os valores e princípios que norteiam cada defesa e atendimento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card Missão - Destaque maior */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-accent-500/10 to-secondary-700 border border-accent-500/20 rounded-xl p-8 text-center"
            >
              <div className="text-accent-500 mb-4">
                <i className="fa-solid fa-heart text-4xl" aria-hidden="true"></i>
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-4 text-accent-500">Nossa Missão</h4>
              <p className="text-secondary-200 text-lg leading-relaxed max-w-3xl mx-auto">
                Proteger os direitos fundamentais de cada cliente, atuando com ética, agilidade e foco em soluções eficazes para promover justiça e segurança jurídica.
              </p>
            </motion.div>

            {/* Pilares */}
            {[
              {
                icon: 'fa-solid fa-graduation-cap',
                title: 'Técnica e Excelência',
                description: 'Fundamentar a defesa em profundo conhecimento jurídico e atualização constante.'
              },
              {
                icon: 'fa-solid fa-chess-knight',
                title: 'Estratégia Personalizada',
                description: 'Construir cada defesa de forma estratégica, adaptada às especificidades do caso e perfil do cliente.'
              },
              {
                icon: 'fa-solid fa-user-check',
                title: 'Atendimento Humano',
                description: 'Tratar cada cliente com empatia, transparência e respeito, garantindo acompanhamento próximo.'
              },
              {
                icon: 'fa-solid fa-shield-halved',
                title: 'Ética e Compromisso',
                description: 'Preservar o sigilo profissional e atuar sempre em conformidade com os princípios éticos da advocacia.'
              },
              {
                icon: 'fa-solid fa-trophy',
                title: 'Resultados Comprovados',
                description: 'Alto índice de sucesso em defesas, com mais de 98% de casos favoráveis, reafirmando nossa dedicação em proteger os interesses do cliente com eficiência e seriedade.'
              }
            ].map((pilar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-900 rounded-xl p-6 text-center hover:bg-secondary-700 transition-all duration-300"
              >
                <div className="text-accent-500 mb-4">
                  <i className={`${pilar.icon} text-3xl`} aria-hidden="true"></i>
                </div>
                <h4 className="text-lg font-bold mb-3">{pilar.title}</h4>
                <p className="text-secondary-300 text-sm leading-relaxed">{pilar.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Seção 3 — Experiência e Diferenciais */}
      <section className="bg-secondary-900 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Experiência e Diferenciais</h3>
            <p className="text-secondary-300 text-lg max-w-3xl mx-auto">
              O que diferencia nossa atuação no cenário jurídico criminal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'fa-solid fa-gavel',
                title: 'Especialista em Tribunal do Júri',
                description: 'Mais de 98% de casos bem-sucedidos em defesas realizadas no Tribunal do Júri.',
                highlight: '98% de sucesso'
              },
              {
                icon: 'fa-solid fa-globe',
                title: 'Atuação Nacional',
                description: 'Atendimento e representação jurídica em todo o território brasileiro.',
                highlight: 'Todo o Brasil'
              },
              {
                icon: 'fa-solid fa-clock',
                title: 'Atendimento Emergencial 24h',
                description: 'Disponibilidade imediata para prisões em flagrante e situações urgentes.',
                highlight: '24h disponível'
              },
              {
                icon: 'fa-solid fa-heart',
                title: 'Defesa Estratégica e Humana',
                description: 'Combinação de técnica, planejamento e atenção personalizada ao cliente.',
                highlight: 'Atendimento humano'
              }
            ].map((diferencial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-800 rounded-xl p-6 text-center hover:bg-secondary-700 transition-all duration-300 hover:scale-105"
              >
                <div className="text-accent-500 mb-4">
                  <i className={`${diferencial.icon} text-4xl`} aria-hidden="true"></i>
                </div>
                <div className="text-accent-500 font-bold text-sm uppercase tracking-wide mb-2">
                  {diferencial.highlight}
                </div>
                <h4 className="text-lg font-bold mb-3">{diferencial.title}</h4>
                <p className="text-secondary-300 text-sm leading-relaxed">{diferencial.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Seção 4 — Por que escolher a Dra. Diulliany Ferro */}
      <section className="bg-secondary-800 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Por que escolher a Dra. Diulliany Ferro</h3>
            <p className="text-secondary-300 text-lg max-w-3xl mx-auto">
              Diferenciais que fazem toda a diferença na sua defesa criminal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Autoridade Técnica',
                description: 'Experiência consolidada em casos de alta complexidade.'
              },
              {
                title: 'Estratégia Comprovada',
                description: 'Defesas planejadas com foco em resultados concretos.'
              },
              {
                title: 'Atendimento Humano e Transparente',
                description: 'Comunicação clara e acompanhamento constante.'
              },
              {
                title: 'Compromisso Ético',
                description: 'Sigilo absoluto e respeito aos direitos fundamentais.'
              }
            ].map((motivo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-secondary-900 rounded-xl p-6"
              >
                <div className="flex-shrink-0">
                  <i className="fa-solid fa-check-circle text-green-500 text-2xl" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{motivo.title}</h4>
                  <p className="text-secondary-300 leading-relaxed">{motivo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Seção 5 — Depoimentos de Clientes */}
      <section className="bg-secondary-900 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Depoimentos de Clientes</h3>
            <p className="text-secondary-300 text-lg max-w-3xl mx-auto">
              Histórias reais de clientes que confiaram em nossa defesa
            </p>
          </motion.div>
          
          <SliderDepoimentos />
        </Container>
      </section>

      {/* Seção 6 — Chamada para Ação (CTA) */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #111827 60%, #1e293b 100%)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-accent-500/10 border border-accent-500/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Em processos criminais, cada minuto conta.
              </h3>
              
              <p className="text-lg md:text-xl text-secondary-300 mb-8 leading-relaxed">
                Se você ou alguém que você ama está sob investigação, preso em flagrante ou precisa de orientação imediata, conte com <span className="text-white font-semibold">atendimento rápido e estratégico</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <WhatsAppButton className="text-lg px-8 py-4">
                  FALE AGORA COM A DRA. DIULLIANY FERRO — ATENDIMENTO 24H
                </WhatsAppButton>
              </div>

              {/* Ícones de contato */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.button
                  onClick={() => window.open('https://wa.me/5562995292129', '_blank')}
                  className="flex items-center gap-3 text-green-500 hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-brands fa-whatsapp text-2xl" aria-hidden="true"></i>
                  <span className="font-semibold">WhatsApp</span>
                </motion.button>
                
                <div className="hidden sm:block w-px h-6 bg-secondary-600"></div>
                
                <motion.button
                  onClick={() => window.open('tel:+5562995292129', '_blank')}
                  className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-solid fa-phone text-xl" aria-hidden="true"></i>
                  <span className="font-semibold">Telefone</span>
                </motion.button>
                
                <div className="hidden sm:block w-px h-6 bg-secondary-600"></div>
                
                <motion.button
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-3 text-accent-500 hover:text-accent-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fa-solid fa-envelope text-xl" aria-hidden="true"></i>
                  <span className="font-semibold">Formulário de contato</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}

function SliderDepoimentos() {
  const depoimentos = [
    { 
      texto: 'A Dra. Diulliany me atendeu numa madrugada e conseguiu liberdade provisória em menos de 24 horas. Profissional, objetiva e muito humana.', 
      autor: 'J.A., Goiânia (2024)' 
    },
    { 
      texto: 'Fui acompanhado desde a investigação até o julgamento. A estratégia dela fez toda a diferença.', 
      autor: 'M.S., Anápolis (2023)' 
    },
    { 
      texto: 'Atendimento rápido, explicações claras e sensatez num momento em que eu não sabia o que fazer. Recomendo.', 
      autor: 'R.P., Brasília (2022)' 
    },
    { 
      texto: 'Recuperei minha reputação graças à defesa firme e bem-preparada da Dra. Diulliany.', 
      autor: 'L.F., Goiás (2021)' 
    }
  ]
  
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % depoimentos.length)
  const prev = () => setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-secondary-800 rounded-2xl p-8 md:p-12 text-center border border-secondary-700"
          >
            <div className="text-accent-500 text-6xl mb-6 font-serif">&ldquo;</div>
            <blockquote className="text-lg md:text-xl italic text-secondary-200 mb-6 leading-relaxed">
              {depoimentos[index].texto}
            </blockquote>
            <cite className="text-accent-500 font-semibold text-lg">
              {depoimentos[index].autor}
            </cite>
          </motion.div>
        </AnimatePresence>
      </div>

      <button 
        onClick={prev} 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-secondary-800 hover:bg-secondary-700 rounded-full text-secondary-300 hover:text-white transition-all duration-300 border border-secondary-600"
        aria-label="Depoimento anterior"
      >
        <i className="fa-solid fa-chevron-left text-lg" aria-hidden="true"></i>
      </button>
      
      <button 
        onClick={next} 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-secondary-800 hover:bg-secondary-700 rounded-full text-secondary-300 hover:text-white transition-all duration-300 border border-secondary-600"
        aria-label="Próximo depoimento"
      >
        <i className="fa-solid fa-chevron-right text-lg" aria-hidden="true"></i>
      </button>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-8">
        {depoimentos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-accent-500' : 'bg-secondary-600 hover:bg-secondary-500'
            }`}
            aria-label={`Ir para depoimento ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


