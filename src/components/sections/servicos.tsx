'use client'

import { motion } from 'framer-motion'
import { FileText, Users, Shield, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { StaggerContainer, StaggerItem } from '@/components/ui/animations'

const servicos = [
  {
    icon: FileText,
    title: 'Defesa Criminal',
    description: 'Defesa completa em processos criminais com estratégia personalizada para cada caso.',
    impact: 'Proteção de seus direitos e liberdade'
  },
  {
    icon: Users,
    title: 'Tribunal do Júri',
    description: 'Especialização em crimes dolosos contra a vida com ampla experiência em júris.',
    impact: 'Defesa especializada em casos complexos'
  },
  {
    icon: Shield,
    title: 'Habeas Corpus',
    description: 'Ação constitucional para proteger a liberdade de locomoção quando ameaçada.',
    impact: 'Liberdade imediata quando possível'
  },
  {
    icon: Clock,
    title: 'Execução Penal',
    description: 'Acompanhamento de execução de penas e solicitação de benefícios legais.',
    impact: 'Redução de pena e progressão de regime'
  },
  {
    icon: MessageCircle,
    title: 'Consultoria Jurídica',
    description: 'Orientação preventiva para evitar problemas jurídicos e proteger seus direitos.',
    impact: 'Prevenção de problemas futuros'
  },
  {
    icon: FileText,
    title: 'Recursos Criminais',
    description: 'Elaboração e acompanhamento de recursos em todas as instâncias judiciais.',
    impact: 'Maior chance de sucesso no processo'
  }
]

export function Servicos() {
  const handleSolicitarAtendimento = () => {
    window.open('https://wa.me/5561999999999?text=Olá! Gostaria de solicitar atendimento jurídico.', '_blank')
  }

  return (
    <section id="servicos" className="bg-secondary-700 text-white py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serviços Principais
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Atendimento especializado em Direito Criminal com foco em resultados e defesa eficaz
          </p>
        </motion.div>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicos.map((servico, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-secondary-800 p-6 rounded-xl hover:bg-secondary-600 transition-all duration-300 group h-full"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-accent-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <servico.icon size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{servico.title}</h3>
                <p className="text-secondary-300 text-sm leading-relaxed mb-4">
                  {servico.description}
                </p>
                <div className="border-t border-secondary-600 pt-4">
                  <p className="text-accent-400 text-sm font-medium">
                    Impacto: {servico.impact}
                  </p>
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
          className="text-center"
        >
          <Button
            onClick={handleSolicitarAtendimento}
            size="lg"
            className="bg-accent-500 hover:bg-accent-600 text-white text-lg px-8 py-4"
          >
            <MessageCircle className="mr-2" size={20} />
            Solicitar atendimento jurídico
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
