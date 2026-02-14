'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
      {/* ================= CALL POPUP ================= */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-background w-full max-w-sm rounded-2xl p-6 shadow-xl">
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

      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-accent">
            🌿 Mangrove Sport Adventures
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center text-white">
            <Link href="#activities">Activities</Link>
            <Link href="#why-us">Why Us</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#reviews">Reviews</Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/90 backdrop-blur-md p-4 space-y-4 text-white">
            <Link href="#activities" onClick={() => setMobileMenuOpen(false)}>Activities</Link>
            <Link href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why Us</Link>
            <Link href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link href="#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/bg1.png"
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="space-y-6 max-w-2xl">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Explore the Mangrove Sport Adventures
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200">
              Kayaking • Country Boat Ride • Stand Up Paddle • Coracle Ride
            </p>

            {/* Buttons */}
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

      {/* Floating Instagram */}
      <a
        href="https://instagram.com/mangrovespot"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-20 z-50 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-4 rounded-full shadow-xl hover:scale-110 transition"
      >
        <Instagram className="text-white w-6 h-6" />
      </a>
    </>
  )
}
