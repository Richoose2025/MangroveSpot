import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'

import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MangroveSpot Varkala - Premium Eco-Adventure Kayaking & Water Sports',
  description: 'Experience premium eco-tourism adventures in Varkala. Kayaking, stand-up paddling, country boat rides, and coracle experiences through mangrove forests.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
