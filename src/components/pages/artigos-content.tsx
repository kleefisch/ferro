'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { artigos, categorias } from '@/data/artigos'
import { useState } from 'react'

export function ArtigosContent() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos os Artigos')
  
  const artigosFiltrados = categoriaSelecionada === 'Todos os Artigos' 
    ? artigos 
    : artigos.filter(artigo => artigo.categoria === categoriaSelecionada)

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Filtros */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {categorias.map((categoria) => (
                <button
                  key={categoria}
                  onClick={() => setCategoriaSelecionada(categoria)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    categoriaSelecionada === categoria
                      ? 'bg-accent-500 text-white'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                  }`}
                >
                  {categoria}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Lista de Artigos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artigosFiltrados.map((artigo, index) => (
              <motion.article
                key={artigo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-secondary-100"
              >
                {/* Imagem */}
                <div className="relative h-48 bg-gradient-to-br from-secondary-800 to-secondary-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">⚖️</div>
                      <div className="text-sm font-medium text-accent-300">{artigo.categoria}</div>
                    </div>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  {/* Meta informações */}
                  <div className="flex items-center gap-4 text-sm text-secondary-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {artigo.data}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {artigo.tempoLeitura}
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 line-clamp-2 group-hover:text-accent-700 transition-colors">
                    {artigo.titulo}
                  </h3>

                  {/* Resumo */}
                  <p className="text-secondary-600 mb-4 line-clamp-3 leading-relaxed">
                    {artigo.resumo}
                  </p>

                  {/* Autor */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-accent-500" />
                      <span className="text-secondary-700 font-medium">{artigo.autor}</span>
                    </div>
                    
                    <Link href={`/artigos/${artigo.slug}`}>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-accent-600 hover:text-accent-700 hover:bg-accent-50 group-hover:translate-x-1 transition-all duration-300"
                      >
                        Ler mais
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Precisa de Orientação Jurídica Especializada?
            </h2>
            <p className="text-secondary-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer suas dúvidas e oferecer a melhor estratégia jurídica para seu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contato">
                <Button size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
                  Falar com Advogada
                </Button>
              </Link>
              <Link href="/servicos">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary-900">
                  Nossos Serviços
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
