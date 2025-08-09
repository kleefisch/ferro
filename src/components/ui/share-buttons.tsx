'use client'

import { Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

interface ShareButtonsProps {
  url?: string
  title?: string
  description?: string
  className?: string
}

export function ShareButtons({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'Artigo - Dra. Diulliany Ferro',
  description = 'Conteúdo jurídico especializado',
  className = ''
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  }

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar URL:', err)
    }
  }

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400')
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm text-secondary-400 mr-2">Compartilhe:</span>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleShare('facebook')}
        className="text-secondary-300 hover:text-blue-400 hover:bg-secondary-800"
      >
        <Facebook className="w-4 h-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleShare('twitter')}
        className="text-secondary-300 hover:text-blue-400 hover:bg-secondary-800"
      >
        <Twitter className="w-4 h-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleShare('linkedin')}
        className="text-secondary-300 hover:text-blue-400 hover:bg-secondary-800"
      >
        <Linkedin className="w-4 h-4" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopyUrl}
        className="text-secondary-300 hover:text-accent-400 hover:bg-secondary-800"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </Button>
    </div>
  )
}
