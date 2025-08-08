'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { openWhatsAppWithGreeting, WhatsAppButton } from '@/components/ui/whatsapp-button'
import { Container } from '@/components/ui/container'
import { StaggerContainer, StaggerItem } from '@/components/ui/animations'

const areas = [
  {
    icon: 'fa-solid fa-building-shield',
    title: 'Atendimento em Delegacia',
    description: 'Acompanhamento em flagrantes e depoimentos, garantindo a proteção de seus direitos desde o início.'
  },
  {
    icon: 'fa-solid fa-gavel',
    title: 'Audiências e Julgamentos',
    description: 'Representação técnica e combativa em audiências de custódia, instrução e sessões de julgamento.'
  },
  {
    icon: 'fa-solid fa-pills',
    title: 'Lei de Drogas',
    description: 'Atuação em casos de tráfico, associação para o tráfico e posse de entorpecentes para uso pessoal.'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Inquérito e Investigação',
    description: 'Defesa estratégica durante a fase de investigação policial, buscando o arquivamento do inquérito.'
  },
  {
    icon: 'fa-solid fa-building-columns',
    title: 'Tribunal do Júri',
    description: 'Atuação especializada em plenário em crimes dolosos contra a vida, como homicídio e feminicídio, do inquérito ao julgamento.'
  },
  {
    icon: 'fa-solid fa-house',
    title: 'Violência Doméstica',
    description: 'Defesa em casos envolvendo a Lei Maria da Penha, atuando na defesa dos direitos do acusado ou da vítima.'
  },
  {
    icon: 'fa-solid fa-heart-crack',
    title: 'Crimes Contra a Integridade Física',
    description: 'Defesa em casos de homicídio, lesão corporal, vias de fato e agressão.'
  },
  {
    icon: 'fa-solid fa-wallet',
    title: 'Crimes Patrimoniais',
    description: 'Defesa em casos de roubo, furto, estelionato, apropriação indébita e receptação.'
  }
]

export function AreasAtuacao() {
  

  return (
    <section id="areas-atuacao" className="bg-secondary-700 text-white py-16">
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
            Defesa criminal especializada com atendimento personalizado em todas as fases do processo
          </p>
        </motion.div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 auto-rows-fr">
          {areas.map((area, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-secondary-800 p-6 rounded-xl hover:bg-secondary-600 transition-all duration-300 group h-full flex flex-col"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-accent-500 mb-4 group-hover:scale-110 transition-transform duration-300 text-center md:text-left">
                  <i className={area.icon} style={{ fontSize: '2rem' }}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center md:text-left">{area.title}</h3>
                <p className="text-secondary-300 text-sm leading-relaxed flex-grow text-center md:text-left mb-4">
                  {area.description}
                </p>
                <div className="mt-auto text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-accent-500 hover:text-accent-400 hover:bg-transparent"
                    onClick={() => openWhatsAppWithGreeting('5562995292129')}
                  >
                    <i className="fa-brands fa-whatsapp mr-2" style={{ fontSize: '1rem' }}></i>
                    Atendimento via WhatsApp
                  </Button>
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
          <WhatsAppButton className="w-full sm:w-auto">FALE AGORA SOBRE SEU CASO</WhatsAppButton>
        </motion.div>
      </Container>
    </section>
  )
}
