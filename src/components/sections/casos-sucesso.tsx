'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { StaggerContainer, StaggerItem } from '@/components/ui/animations'

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

export function CasosSucesso() {
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
            Casos de Sucesso
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Exemplos reais de resultados positivos conquistados com técnica e estratégia
          </p>
        </motion.div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {casosSucesso.map((caso, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-secondary-800 p-6 rounded-xl hover:bg-secondary-700 transition-all duration-300 h-full"
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
      </Container>
    </section>
  )
}


