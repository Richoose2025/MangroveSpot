'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MessageCircle, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showFollowText, setShowFollowText] = useState(false)

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

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/70 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-accent">
              🌿 MangroveSpot
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <Link
                href="#activities"
                className="hover:text-accent transition-colors text-white"
              >
                Activities
              </Link>
              <Link
                href="#why-us"
                className="hover:text-accent transition-colors text-white"
              >
                Why Us
              </Link>
              <Link
                href="#gallery"
                className="hover:text-accent transition-colors text-white"
              >
                Gallery
              </Link>
              <Link
                href="#reviews"
                className="hover:text-accent transition-colors text-white"
              >
                Reviews
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`md:hidden mt-4 space-y-4 p-4 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'bg-background/70 backdrop-blur-md' 
                : 'bg-black/30 backdrop-blur-sm'
            }`}>
              <Link href="#activities" className="block hover:text-accent text-white">
                Activities
              </Link>
              <Link href="#why-us" className="block hover:text-accent text-white">
                Why Us
              </Link>
              <Link href="#gallery" className="block hover:text-accent text-white">
                Gallery
              </Link>
              <Link href="#reviews" className="block hover:text-accent text-white">
                Reviews
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Floating Instagram Button */}
      <a 
        href="https://instagram.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-2 bottom-16 z-50 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full animate-pulse opacity-75"></div>
          
          <div className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-12">
            <Instagram className="w-6 h-6 text-white" />
          </div>
          
          <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-opacity duration-300 pointer-events-none ${
            showFollowText ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            Follow us
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        </div>
      </a>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/bg1.png"
          >
            <source
              src="/bg.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-balance">
              Explore Varkala&apos;s Hidden Mangroves
            </h1>

            <p className="text-xl sm:text-2xl text-gray-100">
              Kayaking • Country Boat Ride • Stand Up Paddling • Coracle Ride
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 font-semibold rounded-full px-8"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}