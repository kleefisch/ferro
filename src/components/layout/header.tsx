'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

const menuItems = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Áreas de Atuação', href: '#areas' },
  { name: 'Artigos', href: '#artigos' },
  { name: 'Contato', href: '#contato' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsApp = () => {
    window.open('https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank')
  }

  const handlePhone = () => {
    window.open('tel:+5561999999999', '_blank')
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-secondary-900/95 backdrop-blur-sm border-b border-secondary-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-xl font-bold text-white">
            Diulliany Ferro Advocacia
          </h1>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-secondary-300 hover:text-white transition-colors duration-200 font-medium"
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* WhatsApp */}
          <motion.button
            onClick={handleWhatsApp}
            className="p-2 text-accent-500 hover:text-accent-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} />
          </motion.button>

          {/* Phone */}
          <motion.button
            onClick={handlePhone}
            className="p-2 text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={20} />
          </motion.button>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsApp}
            className="bg-accent-500 hover:bg-accent-600 text-white"
          >
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-secondary-900 border-t border-secondary-800"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <Container className="py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-secondary-300 hover:text-white transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-4 pt-4 border-t border-secondary-800">
              <button
                onClick={handleWhatsApp}
                className="flex items-center space-x-2 text-accent-500 hover:text-accent-400"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </button>
              
              <button
                onClick={handlePhone}
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
              >
                <Phone size={20} />
                <span>Telefone</span>
              </button>
            </div>

            <Button
              onClick={handleWhatsApp}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white"
            >
              Agendar Consulta
            </Button>
          </Container>
        </motion.div>
      )}
    </motion.header>
  )
}
