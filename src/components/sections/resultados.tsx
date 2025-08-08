'use client'

import { motion } from 'framer-motion'
import { Award, FileText, Clock, Key, Scale, Siren } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { StaggerContainer, StaggerItem } from '@/components/ui/animations'

const resultados = [
  {
    icon: Award,
    number: '98%',
    label: 'Taxa de Sucesso',
    description: 'Em absolvições e resultados favoráveis aos clientes.'
  },
  {
    icon: FileText,
    number: '1000+',
    label: 'Casos Atuados',
    description: 'Defesas criminais realizadas com máxima dedicação e excelência.'
  },
  {
    icon: Key,
    number: '85%',
    label: 'Liberdade Provisória',
    description: 'De sucesso em pedidos de soltura imediata para nossos clientes.'
  },
  {
    icon: Scale,
    number: '80%',
    label: 'Redução de Pena',
    description: 'Ou conversão para medidas alternativas mais brandas.'
  },
  {
    icon: Siren,
    number: '800+',
    label: 'Atendimentos de Urgência',
    description: 'Em prisões em flagrante e audiências de custódia.'
  },
  {
    icon: Clock,
    number: '24h',
    label: 'Atendimento Imediato',
    description: 'Resposta rápida para urgências, a qualquer hora do dia.'
  }
]

export function Resultados() {
  return (
    <section className="bg-secondary-700 text-white py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados que Falam por Si</h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">Números que comprovam nossa eficiência e compromisso com a defesa de seus direitos</p>
        </motion.div>

        {/* Números */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {resultados.map((resultado, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-secondary-800 p-6 rounded-xl text-center group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-accent-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <resultado.icon size={48} />
                </div>
                <div className="text-3xl font-bold text-accent-500 mb-2">
                  {resultado.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{resultado.label}</h3>
                <p className="text-secondary-300 text-sm">
                  {resultado.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Seção de Casos foi separada em outro componente */}
      </Container>
    </section>
  )
}
