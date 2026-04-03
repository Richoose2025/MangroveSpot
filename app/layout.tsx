import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Mangrove Spot Adventures',
  url: 'https://www.mangrovespot.in',
  telephone: '+919496141619',
  email: 'mangrovespotcare@gmail.com',
  description:
    'Best kayaking & water sports in Paravur, Kollam — just 30 mins from Varkala. 10+ activities: kayaking, country boat, ATV, archery, rain dance & more. Group discounts available.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nedungolam, Paravur',
    addressLocality: 'Kollam',
    addressRegion: 'Kerala',
    postalCode: '691334',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 8.9833,
    longitude: 76.6167,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday', 'Sunday',
    ],
    opens: '06:30',
    closes: '18:30',
  },
  priceRange: '₹150 - ₹3500',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI',
  touristType: 'Family, Students, Adventure seekers, Couples',
  hasMap: 'https://maps.google.com/?q=Mangrove+Spot+Paravur+Kollam',
  sameAs: [
    'https://www.instagram.com/mangrovespot',
  ],
}

export const metadata: Metadata = {
  title: 'Mangrove Spot - Kayaking & Water Sports in Paravur | Near Varkala Kerala',
  description:
    'Best kayaking & water sports in Paravur, Kollam — just 30 mins from Varkala. 10+ activities: kayaking, country boat, ATV, archery, rain dance & more. Group discounts available. Book on WhatsApp.',
  keywords:
    'kayaking Paravur, water sports Varkala, kayaking near Varkala, backwater activities Kollam, adventure park Kerala, mangrove kayaking Kerala, Paravur water sports, kayaking Kollam, coracle ride Paravur, ATV Paravur, rain dance Kollam',

  openGraph: {
    title: 'Mangrove Spot - Kayaking & Water Sports in Paravur | Near Varkala Kerala',
    description:
      'Best kayaking & water sports in Paravur, Kollam — just 30 mins from Varkala. 10+ activities including kayaking, ATV, archery & more.',
    url: 'https://www.mangrovespot.in',
    siteName: 'Mangrove Spot Adventures',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.mangrovespot.in/og-image.jpg', // add a 1200x630px kayaking photo here
        width: 1200,
        height: 630,
        alt: 'Mangrove kayaking in Paravur backwaters near Varkala, Kollam Kerala',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mangrove Spot - Kayaking & Water Sports Paravur Kerala',
    description:
      'Best kayaking & water sports in Paravur, Kollam — just 30 mins from Varkala.',
    images: ['https://www.mangrovespot.in/og-image.jpg'],
  },

  alternates: {
    canonical: 'https://www.mangrovespot.in',
  },

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Paravur, Kollam, Kerala',
    'geo.position': '8.9833;76.6167',
    'ICBM': '8.9833, 76.6167',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}