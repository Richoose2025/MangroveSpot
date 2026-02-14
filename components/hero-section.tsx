'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showFollowText, setShowFollowText] = useState(false)
  const [showCallPopup, setShowCallPopup] = useState(false)

  const phoneNumbers = [
    "9496141619",
    "7561001268",
    "7510301168",
    "7510301438",
  ]

  const whatsappNumber = "917561001268"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFollowText(true)
      setTimeout(() => {
        setShowFollowText(false)
      }, 2000)
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const handleWhatsApp = () => {
    const message = `Hello Mangrove Sport Adventures 🌿

I would like to make a booking.

Please share more details.`

    const encodedMessage = encodeURIComponent(message)

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    )
  }

  return (
    <>
      {/* CALL POPUP */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background w-full max-w-sm rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">
                Contact Numbers
              </h3>
              <button onClick={() => setShowCallPopup(false)}>
                <X className="text-white" />
              </button>
            </div>

            <div className="space-y-3">
              {phoneNumbers.map((number, index) => (
                <a
                  key={index}
                  href={`tel:${number}`}
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition"
                >
                  <Phone size={18} />
                  {number}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="./bg1.png"
          >
            <source src="./bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Explore the Mangrove Sport Adventures
            </h1>

            <p className="text-xl sm:text-2xl text-gray-100">
              Kayaking • Country Boat Ride • Stand Up Paddling • Coracle Ride
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8"
              >
                <MessageCircle className="mr-2" size={18} />
                Book Now
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowCallPopup(true)}
                className="border-white text-white hover:bg-white/20 font-semibold rounded-full px-8"
              >
                <Phone className="mr-2" size={18} />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
