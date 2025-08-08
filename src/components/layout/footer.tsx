'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Container } from '@/components/ui/container'

const menuItems = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Áreas de Atuação', href: '#areas' },
  { name: 'Artigos', href: '#artigos' },
  { name: 'Contato', href: '#contato' },
]

const redesSociais = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank')
  }

  const handlePhone = () => {
    window.open('tel:+5561999999999', '_blank')
  }

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Diulliany Ferro Advocacia
              </h3>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                Especialistas em Direito Criminal com mais de 10 anos de experiência. 
                Defendendo seus direitos com estratégia, experiência e compromisso.
              </p>
              
              <div className="flex space-x-4">
                {redesSociais.map((rede, index) => (
                  <motion.a
                    key={index}
                    href={rede.href}
                    className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-accent-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={rede.label}
                  >
                    <rede.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-secondary-300 hover:text-accent-500 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="text-accent-500" size={16} />
                <span className="text-secondary-300 text-sm">
                  Goiânia, GO - Brasil
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-accent-500" size={16} />
                <span className="text-secondary-300 text-sm">
                  (61) 99999-9999
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-accent-500" size={16} />
                <span className="text-secondary-300 text-sm">
                  contato@ferroadvocacia.com.br
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <motion.button
                onClick={handleWhatsApp}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="inline mr-2" size={16} />
                WhatsApp
              </motion.button>
              
              <motion.button
                onClick={handlePhone}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="inline mr-2" size={16} />
                Ligar agora
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Regiões de atendimento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-secondary-800"
        >
          <h4 className="text-lg font-semibold mb-4 text-center">
            Regiões de Atendimento
          </h4>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="bg-secondary-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Goiás</h5>
              <p className="text-secondary-300 text-sm">Goiânia e região</p>
            </div>
            <div className="bg-secondary-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Distrito Federal</h5>
              <p className="text-secondary-300 text-sm">Brasília e entorno</p>
            </div>
            <div className="bg-secondary-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Minas Gerais</h5>
              <p className="text-secondary-300 text-sm">Uberlândia e região</p>
            </div>
            <div className="bg-secondary-800 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Mato Grosso</h5>
              <p className="text-secondary-300 text-sm">Cuiabá e região</p>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-secondary-800 text-center"
        >
          <p className="text-secondary-400 text-sm">
            © 2024 Diulliany Ferro Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-secondary-400 text-sm mt-2">
            OAB/GO 12345 - Advogada especializada em Direito Criminal
          </p>
        </motion.div>
      </Container>
    </footer>
  )
}
