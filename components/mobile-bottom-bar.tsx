'use client'
import { useEffect, useState } from 'react'
import { Phone, MessageCircle, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show on mobile devices
    const isMobile = window.innerWidth < 768
    setIsVisible(isMobile)

    const handleResize = () => {
      setIsVisible(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/30 backdrop-blur-md border-t border-white/10 shadow-lg md:hidden">
      <div className="grid grid-cols-3 gap-2 p-3 max-w-md mx-auto">
        <a href="tel:9496141619">
          <Button
            size="sm"
            className="w-full bg-primary/80 hover:bg-primary/90 backdrop-blur-sm text-primary-foreground rounded-lg flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Phone size={18} />
            <span className="text-xs font-semibold">Call</span>
          </Button>
        </a>
<a 
        
          href="https://wa.me/919496141619"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            className="w-full bg-green-500/80 hover:bg-green-600/90 backdrop-blur-sm text-white rounded-lg flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle size={18} />
            <span className="text-xs font-semibold">WhatsApp</span>
          </Button>
        </a>

        <Button
          size="sm"
          className="w-full bg-accent/80 hover:bg-accent/90 backdrop-blur-sm text-accent-foreground rounded-lg flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <BookOpen size={18} />
          <span className="text-xs font-semibold">Book</span>
        </Button>
      </div>
    </div>
  )
}