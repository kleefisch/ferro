'use client'

import { Button } from '@/components/ui/button'

interface WhatsAppButtonProps {
  className?: string
  children?: React.ReactNode
}

export function getGreetingMessage(): string {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return 'Bom dia, Dra. Diulliany!\n\nEstou precisando de orientação jurídica. Você pode me auxiliar?'
  } else if (hour >= 12 && hour < 18) {
    return 'Boa tarde, Dra. Diulliany!\n\nEstou precisando de orientação jurídica. Você pode me auxiliar?'
  } else {
    return 'Boa noite, Dra. Diulliany!\n\nEstou precisando de orientação jurídica. Você pode me auxiliar?'
  }
}

export function openWhatsAppWithGreeting(phone: string = '5562995292129') {
  const message = encodeURIComponent(getGreetingMessage())
  const url = `https://wa.me/${phone}?text=${message}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function WhatsAppButton({ className, children }: WhatsAppButtonProps) {
  const handleWhatsApp = () => {
    openWhatsAppWithGreeting()
  }

  return (
    <Button
      onClick={handleWhatsApp}
      size="lg"
      className={`bg-accent-500 hover:bg-accent-600 text-secondary-900 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 inline-flex items-center justify-center whitespace-nowrap font-bold ${className || ''}`}
    >
      <i className="fa-brands fa-whatsapp mr-2 flex-shrink-0" style={{ fontSize: '1.875rem', lineHeight: '1' }}></i>
      {children || 'INICIE SUA DEFESA AGORA'}
    </Button>
  )
}
