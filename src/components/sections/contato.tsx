'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    mensagem: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar o envio do formulário
    const message = `Nome: ${formData.nome}\nTelefone: ${formData.telefone}\nMensagem: ${formData.mensagem}`
    window.open(`https://wa.me/5561999999999?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/5561999999999?text=Olá! Gostaria de agendar uma consulta.', '_blank')
  }

  const handlePhone = () => {
    window.open('tel:+5561999999999', '_blank')
  }

  return (
    <section id="contato" className="bg-secondary-700 text-white py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Atendimento rápido e confidencial. Estamos aqui para ajudar você.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary-800 border border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary-800 border border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary-800 border border-secondary-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none"
                  placeholder="Conte-nos sobre seu caso..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent-500 hover:bg-accent-600 text-white"
              >
                Enviar mensagem
              </Button>
            </form>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Informações de Contato
              </h3>
              <p className="text-secondary-300 mb-8">
                Entre em contato conosco através dos canais abaixo para um atendimento personalizado.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-secondary-300">(61) 99999-9999</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Telefone</h4>
                  <p className="text-secondary-300">(61) 99999-9999</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">E-mail</h4>
                  <p className="text-secondary-300">contato@ferroadvocacia.com.br</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Horário de Atendimento</h4>
                  <p className="text-secondary-300">Segunda a Sexta: 8h às 18h</p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4 pt-6">
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white"
              >
                <MessageCircle className="mr-2" size={20} />
                Falar no WhatsApp
              </Button>

              <Button
                onClick={handlePhone}
                variant="outline"
                className="w-full border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
              >
                <Phone className="mr-2" size={20} />
                Ligar agora
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
