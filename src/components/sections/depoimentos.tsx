'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { StaggerContainer, StaggerItem } from '@/components/ui/animations'

const depoimentos = [
  {
    nome: 'João S.',
    cidade: 'Goiânia, GO',
    avaliacao: 5,
    depoimento: 'A Dra. Diulliany foi fundamental para minha defesa. Profissional, atenciosa e com resultados excepcionais. Recomendo fortemente!',
    avatar: 'JS'
  },
  {
    nome: 'Maria A.',
    cidade: 'Brasília, DF',
    avaliacao: 5,
    depoimento: 'Excelente advogada! Conseguiu minha liberdade em tempo recorde. Atendimento humanizado e estratégia eficaz.',
    avatar: 'MA'
  },
  {
    nome: 'Carlos R.',
    cidade: 'Uberlândia, MG',
    avaliacao: 5,
    depoimento: 'Profissional de confiança. Defesa bem-sucedida em caso complexo. Recomendo para quem precisa de resultados.',
    avatar: 'CR'
  },
  {
    nome: 'Ana L.',
    cidade: 'Cuiabá, MT',
    avaliacao: 5,
    depoimento: 'Dra. Diulliany é uma advogada excepcional. Conhecimento técnico e compromisso com o cliente. Resultados que superam expectativas.',
    avatar: 'AL'
  },
  {
    nome: 'Pedro M.',
    cidade: 'Goiânia, GO',
    avaliacao: 5,
    depoimento: 'Atendimento diferenciado e resultados comprovados. A Dra. Diulliany transformou meu caso em sucesso.',
    avatar: 'PM'
  }
]

export function Depoimentos() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Depoimentos de quem confiou em nosso trabalho e teve resultados excepcionais
          </p>
        </motion.div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((depoimento, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-secondary-800 p-6 rounded-xl hover:bg-secondary-600 transition-all duration-300 h-full"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Quote Icon */}
                <div className="text-accent-500 mb-4">
                  <Quote size={24} />
                </div>

                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(depoimento.avaliacao)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent-500 fill-current" />
                  ))}
                </div>

                {/* Depoimento */}
                <p className="text-secondary-300 text-sm leading-relaxed mb-6">
                  &ldquo;{depoimento.depoimento}&rdquo;
                </p>

                {/* Cliente */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {depoimento.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{depoimento.nome}</p>
                    <p className="text-secondary-400 text-xs">{depoimento.cidade}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-secondary-800 p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Confiança e Resultados
            </h3>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Nossos clientes são nossa maior prova de sucesso. Cada depoimento representa 
              uma história de superação e justiça conquistada.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
