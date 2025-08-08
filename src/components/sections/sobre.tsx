'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { Container } from '@/components/ui/container'
import Image from 'next/image'

export function Sobre() {
  const handleConhecerTrajetoria = () => {
    // Navigate to about page or scroll to about section
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="sobre" className="bg-secondary-900 text-white py-16">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full mx-auto">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary-800">
                <Image
                  src="/images/sobre/dra-diulliany-sobre.webp"
                  alt="Dra. Diulliany Ferro - Advocacia Criminal"
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 480px, 100vw"
                  priority={false}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-accent-500/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-accent-500 uppercase tracking-wide text-xs mb-2">CONHEÇA A DRA. DIULLIANY FERRO</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Defesa Criminal com Compromisso e Excelência</h2>
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

            <div className="flex flex-wrap gap-5 pt-4">
              <div className="bg-secondary-800 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                <i className="fa-solid fa-scale-balanced text-accent-500" aria-hidden="true"></i>
                <span className="text-secondary-300">
                  <span className="text-accent-500 font-semibold">Especialista</span> em Tribunal do Júri
                </span>
              </div>
              <div className="bg-secondary-800 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                <i className="fa-solid fa-chart-line text-accent-500" aria-hidden="true"></i>
                <span className="text-secondary-300">
                  <span className="text-accent-500 font-semibold">98%</span> de casos bem-sucedidos
                </span>
              </div>
              <div className="bg-secondary-800 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                <i className="fa-solid fa-globe text-accent-500" aria-hidden="true"></i>
                <span className="text-secondary-300">
                  <span className="text-accent-500 font-semibold">Atuação</span> em todo o território nacional
                </span>
              </div>
              <div className="bg-secondary-800 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                <i className="fa-solid fa-id-card text-accent-500" aria-hidden="true"></i>
                <span className="text-secondary-300">
                  <span className="text-accent-500 font-semibold">OAB/GO</span> 66.387
                </span>
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} className="pt-6">
              <div className="flex flex-col sm:flex-row gap-5">
                <WhatsAppButton className="w-full sm:w-auto">ESCLAREÇA SUAS DÚVIDAS</WhatsAppButton>
                <Button
                  onClick={handleConhecerTrajetoria}
                  variant="outline"
                  className="w-full sm:w-auto border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
                >
                  Conheça minha trajetória
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
