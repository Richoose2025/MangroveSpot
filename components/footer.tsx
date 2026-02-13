'use client'

import { Phone, MessageCircle, MapPin, Instagram, Mail, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-accent">
              🌿 Mangrove Spot
            </div>
            <p className="text-muted-foreground">
              Premium eco-adventure experiences in Nedungolam, Paravur, Kollam – Kerala.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>

            <div className="space-y-3">

              <a href="tel:9496141619" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                <Phone size={18} />
                9496141619
              </a>

              <a href="tel:7561001268" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                <Phone size={18} />
                7561001268
              </a>

              <a href="tel:7510301168" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                <Phone size={18} />
                7510301168
              </a>

              <a href="tel:7510301438" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
                <Phone size={18} />
                7510301438
              </a>

              <a
                href="https://wa.me/917561001268"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-green-500 transition"
              >
                <MessageCircle size={18} />
                WhatsApp Chat
              </a>

              <a
                href="mailto:mangrovespotcare@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition"
              >
                <Mail size={18} />
                mangrovespotcare@gmail.com
              </a>

            </div>
          </div>

          {/* Location & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Location</h3>

            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>
                Nedungolam, Paravur<br />
                Kollam, Kerala – 691334
              </span>
            </div>

            <div className="pt-4 space-y-3">

              <a
                href="https://www.mangrovespot.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition"
              >
                <Globe size={18} />
                www.mangrovespot.in
              </a>

              <a
                href="https://instagram.com/mangrovespot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-pink-500 transition"
              >
                <Instagram size={18} />
                @mangrovespot
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Mangrove Spot. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
