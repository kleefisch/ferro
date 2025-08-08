'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

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
            <div className="relative">
              {/* Placeholder for professional photo */}
              <div className="aspect-[4/5] bg-gradient-to-br from-secondary-800 to-secondary-700 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-40 h-40 bg-accent-500/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Shield size={64} className="text-accent-500" />
                    </div>
                    <p className="text-xl font-semibold">Dra. Diulliany Ferro</p>
                    <p className="text-secondary-300">Advocacia Criminal</p>
                  </div>
                </div>
              </div>
              

            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sobre a Dra. Diulliany Ferro
              </h2>
              <p className="text-xl text-secondary-300 leading-relaxed">
                Advogada especializada em Direito Criminal com mais de 10 anos de experiência, 
                atuando em Goiás, Distrito Federal, Minas Gerais e Mato Grosso.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <GraduationCap className="text-accent-500 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Formação Acadêmica</h3>
                  <p className="text-secondary-300 text-sm">
                    Graduada em Direito pela Universidade Federal de Goiás (UFG) com 
                    especialização em Direito Penal e Processual Penal.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="text-accent-500 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Especializações</h3>
                  <p className="text-secondary-300 text-sm">
                    Pós-graduada em Direito Penal e Processual Penal. 
                    Especialista em Tribunal do Júri e Execução Penal.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-accent-500 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold">Atuação Regional</h3>
                  <p className="text-secondary-300 text-sm">
                    Atendimento em Goiás, Distrito Federal, Minas Gerais e Mato Grosso, 
                    com escritório principal em Goiânia.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-secondary-800 px-4 py-2 rounded-lg">
                <span className="text-accent-500 font-semibold">OAB/GO</span>
                <span className="text-secondary-300 ml-2">12345</span>
              </div>
              <div className="bg-secondary-800 px-4 py-2 rounded-lg">
                <span className="text-accent-500 font-semibold">10+</span>
                <span className="text-secondary-300 ml-2">anos de experiência</span>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="pt-4"
            >
              <Button
                onClick={handleConhecerTrajetoria}
                className="bg-accent-500 hover:bg-accent-600 text-white"
              >
                Conheça minha trajetória
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
