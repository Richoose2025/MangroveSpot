import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'

import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mangrove Spot - Kayaking & Water Sports in Paravur | Near Varkala Kerala',
  description: 'Best kayaking & water sports in Paravur, Kollam — just 30 mins from Varkala. 10+ activities: kayaking, country boat, ATV, archery, rain dance & more. Group discounts available. Book on WhatsApp.',
  keywords: 'kayaking Paravur, water sports Varkala, kayaking near Varkala, backwater activities Kollam, adventure park Kerala, mangrove kayaking Kerala, Paravur water sports, kayaking Kollam',
  generator: 'Adarsh',
  
  openGraph: {
    title: 'Mangrove Spot - Kayaking & Water Sports in Paravur | Near Varkala Kerala',
    description: 'Best kayaking & water sports in Paravur, Kollam — just 30 mins from Varkala. 10+ activities including kayaking, ATV, archery & more.',
    url: 'https://www.mangrovespot.in',
    siteName: 'Mangrove Spot Adventures',
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mangrove Spot - Kayaking & Water Sports Paravur Kerala',
    description: 'Best kayaking & water sports in Paravur, Kollam — just 30 mins from Varkala.',
  },

  alternates: {
    canonical: 'https://www.mangrovespot.in',
  },

  icons: {
    icon: './logo.png',
    shortcut: './logo.png',
    apple: './logo.png',
  },
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