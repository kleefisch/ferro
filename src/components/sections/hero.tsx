'use client'

import { motion } from 'framer-motion'
import { Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import Image from 'next/image'

export function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5561999999999?text=Olá Dra. Diulliany! Gostaria de agendar uma consulta.', '_blank')
  }

  return (
    <section id="inicio" className="bg-secondary-900 text-white pt-20 pb-4">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] lg:items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
                                    <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Sua liberdade não espera.{' '}
                            <span className="text-accent-500">Sua defesa começa agora.</span>
                          </h1>
                        </motion.div>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="text-lg text-secondary-300 leading-relaxed"
                        >
                          Se você ou alguém próximo está sendo investigado, processado ou preso, conte com uma advogada criminalista experiente, estratégica e dedicada, disponível 24 horas para agir com rapidez e precisão.
                        </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
                                        <Button
                            onClick={handleWhatsApp}
                            size="lg"
                            className="bg-accent-500 hover:bg-accent-600 text-white text-lg px-8 py-4"
                          >
                            Inicie sua defesa agora
                          </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-6 text-secondary-300"
            >
              <div className="flex items-center space-x-2">
                <Shield className="text-accent-500" size={20} />
                <span className="text-sm">Atendimento confidencial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-accent-500" size={20} />
                <span className="text-sm">Resposta rápida</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Foto da Dra. Diulliany */}
            <div className="aspect-[3/4] bg-gradient-to-br from-secondary-800/50 to-secondary-700/50 rounded-2xl overflow-hidden relative">
              <Image
                src="/images/hero/dra-diulliany-hero.webp"
                alt="Dra. Diulliany Ferro - Advogada Criminal"
                width={500}
                height={500}
                className="w-full h-full object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent rounded-2xl"></div>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
