'use client'

import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-accent">🌿 MangroveSpot</div>
            <p className="text-muted-foreground">
              Premium eco-adventure experiences in beautiful Varkala
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:9496141619"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone size={20} />
                9496141619
              </a>
              <a
                href="tel:7561001268"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone size={20} />
                7561001268
              </a>
              <a
                href="https://wa.me/919496141619"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Location & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Location</h3>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin size={20} className="mt-1 flex-shrink-0" />
              <span>Varkala, Kerala, India</span>
            </div>

            <div className="pt-4">
              <a
                href="https://instagram.com/mangrovespot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              >
                <Instagram size={20} />
                @mangrovespot
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} MangroveSpot Varkala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
