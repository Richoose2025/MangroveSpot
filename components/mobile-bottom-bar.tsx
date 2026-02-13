'use client'
import { useEffect, useState } from 'react'
import { Phone, MessageCircle, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleBooking = () => {
    const phoneNumber = "917561001268"

    const message = `Hello Mangrove Spot 🌿

I would like to book a kayaking session.

Activity: Kayaking
Preferred Date:
Preferred Time:
Number of Persons:
Name:

Please confirm availability and share payment details.`

    const encodedMessage = encodeURIComponent(message)

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    )
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/30 backdrop-blur-md border-t border-white/10 shadow-lg md:hidden">
      <div className="grid grid-cols-3 gap-2 p-3 max-w-md mx-auto">
        
        {/* Call */}
        <a href="tel:9496141619">
          <Button
            size="sm"
            className="w-full bg-primary/80 hover:bg-primary/90 text-primary-foreground rounded-lg flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Phone size={18} />
            <span className="text-xs font-semibold">Call</span>
          </Button>
        </a>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/917561001268"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="sm"
            className="w-full bg-green-500/80 hover:bg-green-600/90 text-white rounded-lg flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MessageCircle size={18} />
            <span className="text-xs font-semibold">WhatsApp</span>
          </Button>
        </a>

        {/* Book with Message */}
        <Button
          size="sm"
          onClick={handleBooking}
          className="w-full bg-accent/80 hover:bg-accent/90 text-accent-foreground rounded-lg flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <BookOpen size={18} />
          <span className="text-xs font-semibold">Book</span>
        </Button>

      </div>
    </div>
  )
}
