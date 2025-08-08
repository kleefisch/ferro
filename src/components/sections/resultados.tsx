'use client'

import { motion } from 'framer-motion'
import { Users, Award, Clock, Shield } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { StaggerContainer, StaggerItem } from '@/components/ui/animations'

const resultados = [
  {
    icon: Clock,
    number: '10+',
    label: 'Anos de Experiência',
    description: 'Atuação especializada em Direito Criminal'
  },
  {
    icon: Users,
    number: '500+',
    label: 'Clientes Atendidos',
    description: 'Casos de sucesso em toda a região'
  },
  {
    icon: Award,
    number: '95%',
    label: 'Índice de Êxito',
    description: 'Alta taxa de sucesso em defesas'
  },
  {
    icon: Shield,
    number: '100+',
    label: 'Habeas Corpus',
    description: 'Liberdades conquistadas com sucesso'
  }
]

const casosSucesso = [
  {
    titulo: 'Liberdade em Habeas Corpus',
    descricao: 'Conquista de liberdade para cliente acusado de crime contra a pessoa, demonstrando ilegalidade na prisão.',
    resultado: 'Liberdade concedida em 48h'
  },
  {
    titulo: 'Absolvição em Tribunal do Júri',
    descricao: 'Defesa bem-sucedida em caso complexo de homicídio, com estratégia personalizada e provas técnicas.',
    resultado: 'Júri unânime pela absolvição'
  },
  {
    titulo: 'Redução de Pena',
    descricao: 'Acompanhamento de execução penal com progressão de regime e benefícios legais.',
    resultado: 'Redução de 50% da pena'
  }
]

export function Resultados() {
  return (
    <section className="bg-secondary-900 text-white py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados e Casos de Sucesso
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Números que comprovam nossa eficiência e compromisso com a defesa de seus direitos
          </p>
        </motion.div>

        {/* Números */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Casos de Sucesso */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Casos de Sucesso
          </h3>
        </motion.div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {casosSucesso.map((caso, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-secondary-800 p-6 rounded-xl hover:bg-secondary-700 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h4 className="text-xl font-semibold mb-3 text-accent-500">
                  {caso.titulo}
                </h4>
                <p className="text-secondary-300 text-sm leading-relaxed mb-4">
                  {caso.descricao}
                </p>
                <div className="border-t border-secondary-600 pt-4">
                  <p className="text-accent-400 text-sm font-medium">
                    Resultado: {caso.resultado}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-secondary-800 p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Nossa Missão
            </h3>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Defender seus direitos com estratégia, experiência e compromisso. 
              Cada caso é único e merece atenção personalizada para alcançar os melhores resultados.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
