'use client'

import { motion } from 'framer-motion'
import { Shield, Users, DollarSign, Gavel } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { StaggerContainer, StaggerItem } from '@/components/ui/animations'

const areas = [
  {
    icon: Gavel,
    title: 'Tribunal do Júri',
    description: 'Defesa especializada em crimes dolosos contra a vida com ampla experiência em júris.'
  },
  {
    icon: Users,
    title: 'Crimes Contra a Pessoa',
    description: 'Atuação em lesões corporais, ameaças, sequestro e outros crimes contra a pessoa.'
  },
  {
    icon: DollarSign,
    title: 'Crimes Econômicos',
    description: 'Defesa em crimes contra a ordem econômica, estelionato e lavagem de dinheiro.'
  },
  {
    icon: Shield,
    title: 'Execução Penal',
    description: 'Acompanhamento de execução de penas e benefícios da Lei de Execução Penal.'
  }
]

export function AreasAtuacao() {
  const handleVerTodas = () => {
    // Scroll to areas section or navigate to full areas page
    document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="areas" className="bg-secondary-700 text-white py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Especialização em Direito Criminal com foco em resultados e defesa eficaz
          </p>
        </motion.div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {areas.map((area, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-secondary-800 p-6 rounded-xl hover:bg-secondary-600 transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-accent-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-secondary-300 text-sm leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={handleVerTodas}
            variant="outline"
            className="border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
          >
            Ver todas as áreas de atuação
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
