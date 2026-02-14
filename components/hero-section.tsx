'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showCallPopup, setShowCallPopup] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)
  
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

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showCallPopup) {
        setShowCallPopup(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [showCallPopup])

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowCallPopup(false)
      }
    }
    if (showCallPopup) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showCallPopup])

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (showCallPopup) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showCallPopup])

  const handleWhatsApp = () => {
    const message = `Hello Mangrove Sport Adventures 🌿

I would like to make a booking.

Please share more details.`

    const encodedMessage = encodeURIComponent(message)
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  const navItems = [
    { href: '#activities', label: 'Activities' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#reviews', label: 'Reviews' },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* ================= CALL POPUP ================= */}
      {showCallPopup && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div 
            ref={popupRef}
            className="bg-background w-full max-w-sm rounded-2xl p-6 shadow-xl animate-in zoom-in-95 duration-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 id="popup-title" className="text-lg font-semibold text-white">
                Contact Numbers
              </h3>
              <button 
                onClick={() => setShowCallPopup(false)}
                className="hover:bg-white/10 p-1 rounded transition-colors"
                aria-label="Close dialog"
              >
                <X className="text-white" size={20} />
              </button>
            </div>

           <div className="space-y-3">
  {phoneNumbers.map((number) => (
    <a
      key={number}
      href={`tel:${number}`}
      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-colors"
      aria-label={`Call ${number}`}
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
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-accent hover:text-accent/90 transition-colors">
            🌿 Mangrove Sport 
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-accent transition-colors font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:bg-white/10 p-2 rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg animate-in slide-in-from-top duration-200">
            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-white hover:text-accent hover:bg-white/5 px-4 py-3 rounded-lg transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick()
                    setTimeout(() => {
                      document.querySelector(item.href)?.scrollIntoView({ 
                        behavior: 'smooth' 
                      })
                    }, 150)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
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
            poster="./bg1.png"
            aria-hidden="true"
            preload="auto"
          >
            <source src="./bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" aria-hidden="true"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="space-y-6 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Explore the Mangrove Sport Adventures
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light">
              Kayaking • Country Boat Ride • Stand Up Paddle • Coracle Ride
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">

              <Button
                size="lg"
                onClick={handleWhatsApp}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <MessageCircle className="mr-2" size={18} />
                Book Now
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowCallPopup(true)}
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-full px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
        className="fixed right-4 bottom-20 z-50 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-200"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="text-white w-6 h-6" />
      </a>
    </>
  )
}