'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Container } from '@/components/ui/container'

const faqs = [
  {
    pergunta: 'O que fazer ao receber uma intimação?',
    resposta: 'Ao receber uma intimação, é fundamental procurar um advogado criminal imediatamente. Não ignore o documento e mantenha a calma. Um advogado especializado pode analisar o caso e orientar sobre os próximos passos.'
  },
  {
    pergunta: 'Quanto tempo dura um processo criminal?',
    resposta: 'O tempo de duração varia conforme a complexidade do caso e a instância. Processos simples podem durar alguns meses, enquanto casos complexos podem levar anos. A estratégia de defesa pode influenciar significativamente o tempo.'
  },
  {
    pergunta: 'Posso ter atendimento online?',
    resposta: 'Sim! Oferecemos atendimento online para consultas iniciais e acompanhamento de processos. Utilizamos plataformas seguras para garantir a confidencialidade das informações.'
  },
  {
    pergunta: 'Como funciona o Habeas Corpus?',
    resposta: 'O Habeas Corpus é uma ação constitucional que protege a liberdade de locomoção. Pode ser impetrado quando há ilegalidade ou abuso de poder. A análise é rápida e pode resultar em liberdade imediata.'
  },
  {
    pergunta: 'Quais são os custos dos serviços?',
    resposta: 'Os honorários variam conforme a complexidade do caso e serviços necessários. Oferecemos consulta inicial gratuita para análise do caso e apresentação de proposta personalizada.'
  },
  {
    pergunta: 'Atendo em quais regiões?',
    resposta: 'Atendo em Goiás, Distrito Federal, Minas Gerais e Mato Grosso. Tenho experiência em tribunais dessas regiões e posso atuar em casos de outras localidades conforme necessidade.'
  }
]

interface FAQItemProps {
  pergunta: string
  resposta: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ pergunta, resposta, isOpen, onToggle }: FAQItemProps) {
  return (
    <motion.div
      className="border-b border-secondary-700"
      initial={false}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 text-left flex items-center justify-between hover:text-accent-500 transition-colors"
      >
        <span className="text-lg font-medium">{pergunta}</span>
        {isOpen ? (
          <ChevronUp className="text-accent-500" size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-secondary-300 leading-relaxed">
              {resposta}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Respostas para as principais dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-secondary-800 rounded-xl overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                pergunta={faq.pergunta}
                resposta={faq.resposta}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-secondary-800 p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg text-secondary-300 leading-relaxed mb-6">
              Entre em contato conosco para esclarecer qualquer dúvida sobre nossos serviços
            </p>
            <motion.button
              onClick={() => window.open('https://wa.me/5561999999999?text=Olá! Tenho algumas dúvidas sobre os serviços.', '_blank')}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Fale conosco
            </motion.button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
