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
      {/* Hero simples da página */}
      <section className="bg-secondary-800 text-white py-16 border-b border-secondary-700">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Defesa Criminal com Compromisso e Excelência</h1>
            <p className="text-lg md:text-xl text-secondary-300">
              CONHEÇA A DRA. DIULLIANY FERRO — atuação técnica, estratégica e humana, focada em resultados concretos e na proteção dos seus direitos.
            </p>
          </div>
        </Container>
      </section>

      {/* Conteúdo principal */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Foto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full max-w-lg mx-auto"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary-800">
                <Image
                  src="/images/sobre/dra-diulliany-sobre.webp"
                  alt="Dra. Diulliany Ferro - Advocacia Criminal"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 540px, 100vw"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-accent-500/10 to-transparent" />
              </div>
            </motion.div>

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-accent-500 uppercase tracking-wide text-xs mb-2">CONHEÇA A DRA. DIULLIANY FERRO</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Compromisso com a Justiça e a Ética</h2>
                <div className="space-y-6 text-secondary-300 leading-relaxed">
                  <p>
                    A Dra. Diulliany Ferro é advogada criminalista com sólida formação e ampla experiência em Direito Penal e Processual Penal, atuando com seriedade, agilidade e absoluto profissionalismo em todas as fases do processo.
                  </p>
                  <p>
                    Reconhecida por sua postura firme e estratégica, tem alta taxa de sucesso na defesa de seus clientes, tanto em investigações quanto em ações penais complexas.
                  </p>
                  <p>
                    Comprometida com a justiça e a ética, oferece um atendimento personalizado, humano e eficiente, sempre focada em resultados concretos e na proteção dos direitos fundamentais.
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-secondary-800 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                  <i className="fa-solid fa-scale-balanced text-accent-500" aria-hidden="true"></i>
                  <span className="text-secondary-300"><span className="text-accent-500 font-semibold">Especialista</span> em Tribunal do Júri</span>
                </div>
                <div className="bg-secondary-800 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                  <i className="fa-solid fa-chart-line text-accent-500" aria-hidden="true"></i>
                  <span className="text-secondary-300"><span className="text-accent-500 font-semibold">98%</span> de casos bem-sucedidos</span>
                </div>
                <div className="bg-secondary-800 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                  <i className="fa-solid fa-globe text-accent-500" aria-hidden="true"></i>
                  <span className="text-secondary-300"><span className="text-accent-500 font-semibold">Atuação</span> em todo o território nacional</span>
                </div>
                <div className="bg-secondary-800 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                  <i className="fa-solid fa-id-card text-accent-500" aria-hidden="true"></i>
                  <span className="text-secondary-300"><span className="text-accent-500 font-semibold">OAB/GO</span> 66.387</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <WhatsAppButton className="w-full sm:w-auto">ESCLAREÇA SUAS DÚVIDAS</WhatsAppButton>
                <a
                  href="/#areas-atuacao"
                  className="w-full sm:w-auto inline-flex items-center justify-center border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Áreas de Atuação
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

  {/* Seção 1 — Quem é a Dra. Diulliany Ferro */}
  <section className="bg-secondary-900 text-white py-16">
    <Container>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-4">
          <i className="fa-solid fa-scale-balanced text-accent-500 mt-1" aria-hidden="true"></i>
          <div>
            <h3 className="text-2xl font-bold mb-3">Quem é a Dra. Diulliany Ferro</h3>
            <p className="text-secondary-300 leading-relaxed">
              Escolhi o Direito Criminal por vocação. Acredito que cada pessoa merece uma defesa técnica, humana e determinada, especialmente nos momentos mais difíceis. Minha atuação é pautada pela ética, estratégia e coragem para enfrentar casos complexos, sempre com foco em resultados práticos e na proteção dos direitos fundamentais.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>

  {/* Seção 2 — Formação, Credenciais e Associações */}
  <section className="bg-secondary-800 text-white py-16">
    <Container>
      <h3 className="text-2xl font-bold text-center mb-10">Formação, Credenciais e Associações</h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="flex items-start gap-3">
          <i className="fa-solid fa-graduation-cap text-accent-500 mt-1" aria-hidden="true"></i>
          <p className="text-secondary-300"><span className="font-semibold text-white">Bacharelado em Direito</span> — Universidade reconhecida (UFG)</p>
        </div>
        <div className="flex items-start gap-3">
          <i className="fa-solid fa-certificate text-accent-500 mt-1" aria-hidden="true"></i>
          <p className="text-secondary-300"><span className="font-semibold text-white">Pós-graduação</span> em Direito Penal e Processual Penal</p>
        </div>
        <div className="flex items-start gap-3">
          <i className="fa-solid fa-scale-balanced text-accent-500 mt-1" aria-hidden="true"></i>
          <p className="text-secondary-300"><span className="font-semibold text-white">Membro</span> da Comissão de Direito Criminal (OAB)</p>
        </div>
        <div className="flex items-start gap-3">
          <i className="fa-solid fa-id-card text-accent-500 mt-1" aria-hidden="true"></i>
          <p className="text-secondary-300"><span className="font-semibold text-white">OAB/GO</span> 66.387</p>
        </div>
      </div>
    </Container>
  </section>

  {/* Seção 3 — Experiência e Diferenciais */}
  <section className="bg-secondary-900 text-white py-16">
    <Container>
      <h3 className="text-2xl font-bold text-center mb-10">Experiência e Diferenciais</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-secondary-800 rounded-xl p-6">
          <div className="text-accent-500 mb-3"><i className="fa-solid fa-gavel" aria-hidden="true"></i></div>
          <h4 className="font-semibold mb-2">Especialista em Tribunal do Júri</h4>
          <p className="text-secondary-300 text-sm">Atuação técnica e estratégica em crimes dolosos contra a vida.</p>
        </div>
        <div className="bg-secondary-800 rounded-xl p-6">
          <div className="text-accent-500 mb-3"><i className="fa-solid fa-clock" aria-hidden="true"></i></div>
          <h4 className="font-semibold mb-2">Atendimento Emergencial 24h</h4>
          <p className="text-secondary-300 text-sm">Pronta resposta em flagrantes e audiências de custódia.</p>
        </div>
        <div className="bg-secondary-800 rounded-xl p-6">
          <div className="text-accent-500 mb-3"><i className="fa-solid fa-shield-halved" aria-hidden="true"></i></div>
          <h4 className="font-semibold mb-2">Defesa Estratégica Personalizada</h4>
          <p className="text-secondary-300 text-sm">Atuação desde o inquérito policial até os tribunais superiores.</p>
        </div>
      </div>
    </Container>
  </section>

  {/* Seção 4 — Por que escolher */}
  <section className="bg-secondary-800 text-white py-16">
    <Container>
      <h3 className="text-2xl font-bold text-center mb-8">Por que escolher a Dra. Diulliany Ferro</h3>
      <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {[
          'Compromisso absoluto com seus direitos',
          'Atendimento humano e confidencial',
          'Transparência e objetividade na comunicação',
          'Estratégia baseada em estudo profundo do caso',
          'Experiência com casos complexos e de repercussão',
          'Acompanhamento próximo em todas as etapas',
        ].map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <i className="fa-solid fa-check text-green-500 mt-1" aria-hidden="true"></i>
            <p className="text-secondary-300">{item}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>

  {/* Seção 5 — Depoimentos (slider simples) */}
  <section className="bg-secondary-900 text-white py-16">
    <Container>
      <h3 className="text-2xl font-bold text-center mb-8">Depoimentos de Clientes</h3>
      <SliderDepoimentos />
    </Container>
  </section>

  {/* Seção 6 — CTA Forte */}
  <section className="py-16" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #111827 60%)' }}>
    <Container>
      <div className="text-center max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Em processos criminais, cada minuto conta.</h3>
        <p className="text-secondary-300 mb-6">Atendimento emergencial 24h — resposta imediata para situações de urgência.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppButton className="w-full sm:w-auto">FALE AGORA COM A DRA. DIULLIANY FERRO</WhatsAppButton>
          <Button
            onClick={() => window.open('tel:+5562995292129', '_blank')}
            variant="outline"
            className="w-full sm:w-auto border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
          >
            <i className="fa-solid fa-phone mr-2" aria-hidden="true"></i>
            Ligar agora
          </Button>
        </div>
        <a href="/\#contato" className="block mt-4 text-sm text-secondary-300 hover:text-white">Prefere escrever? Use nosso formulário de contato.</a>
      </div>
    </Container>
  </section>
    </main>
  )
}

function SliderDepoimentos() {
  const depoimentos = [
    { texto: 'A melhor defesa que eu poderia ter. Atuação impecável e estratégica.', autor: 'J.S., Goiânia (2024)' },
    { texto: 'Atendimento humano e resultados concretos. Recomendo.', autor: 'M.A., Brasília (2024)' },
    { texto: 'Profissional firme e competente. Conseguiu minha liberdade rapidamente.', autor: 'C.R., Uberlândia (2023)' },
  ]
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % depoimentos.length)
  const prev = () => setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length)

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-secondary-800 rounded-xl p-8 text-center"
          >
            <div className="text-accent-500 text-4xl mb-4">“</div>
            <p className="italic text-secondary-300 mb-4">{depoimentos[index].texto}</p>
            <p className="text-secondary-400 text-sm">{depoimentos[index].autor}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-secondary-300 hover:text-white" aria-label="Anterior">
        <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-secondary-300 hover:text-white" aria-label="Próximo">
        <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  )
}


