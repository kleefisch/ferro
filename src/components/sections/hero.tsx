'use client'

import { motion } from 'framer-motion'
import { Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import Image from 'next/image'

export function Hero() {
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
                          <WhatsAppButton />
                          
                          <Button
                            onClick={() => document.getElementById('areas-atuacao')?.scrollIntoView({ behavior: 'smooth' })}
                            size="lg"
                            variant="outline"
                            className="border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 inline-flex items-center justify-center whitespace-nowrap"
                          >
                            <Shield className="mr-2 w-6 h-6 flex-shrink-0" />
                            Áreas de Atuação
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
                <span className="text-sm">Sigilo garantido</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-accent-500" size={20} />
                <span className="text-sm">Atendimento 24h</span>
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

              {/* Badge sobre a foto */}
              <div className="absolute bottom-3 right-3">
                <div className="inline-flex items-center gap-2 bg-secondary-800/90 border border-secondary-700 px-3 py-1 rounded-full shadow-lg">
                  <i className="fa-solid fa-id-card text-accent-500" aria-hidden="true"></i>
                  <span className="text-xs font-medium">Dra. Diulliany Ferro</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
