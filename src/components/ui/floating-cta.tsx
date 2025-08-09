'use client'

import { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 10000) // Aparece após 10 segundos

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 shadow-lg animate-pulse"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm">
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-lg shadow-xl border-2 border-red-400 relative">
        <Button
          onClick={() => setIsMinimized(true)}
          variant="ghost"
          size="sm"
          className="absolute top-1 right-1 text-white hover:bg-red-800 w-6 h-6 p-0"
        >
          <X className="w-4 h-4" />
        </Button>
        
        <div className="mb-3">
          <h4 className="font-bold text-sm mb-1">🚨 Caso Urgente?</h4>
          <p className="text-xs text-red-100">
            Atendimento 24h para prisões e emergências jurídicas
          </p>
        </div>
        
        <WhatsAppButton 
          className="w-full bg-white hover:bg-yellow-50 text-red-700 border-0 text-sm py-2"
        >
          <Phone className="w-4 h-4 mr-2" />
          FALAR AGORA
        </WhatsAppButton>
      </div>
    </div>
  )
}
