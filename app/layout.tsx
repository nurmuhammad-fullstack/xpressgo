import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'XpressGo — Navbatsiz qahva va taom | Toshkent',
  description: 'Telegram orqali qahva, sharbat va hot-dog buyurtma bering. Vaqtingizni tanlang, Click yoki Payme bilan to\'lang va navbatsiz olib keting. Toshkentda 120+ hamkor kafe.',
  keywords: ['xpressgo', 'pre-order', 'qahva', 'coffee', 'tashkent', 'telegram', 'navbatsiz', 'buyurtma', 'click', 'payme'],
  authors: [{ name: 'XpressGo' }],
  creator: 'XpressGo',
  publisher: 'XpressGo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://xpressgo.uz'),
  alternates: {
    canonical: '/',
    languages: {
      'uz': '/uz',
      'ru': '/ru',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: 'https://xpressgo.uz',
    title: 'XpressGo — Navbatsiz qahva va taom',
    description: 'Telegram orqali qahva, sharbat va hot-dog buyurtma bering. Navbatsiz olib keting!',
    siteName: 'XpressGo',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'XpressGo - Navbatsiz xizmat',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XpressGo — Navbatsiz qahva va taom',
    description: 'Telegram orqali buyurtma bering, navbatsiz olib keting!',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0057FF' },
    { media: '(prefers-color-scheme: dark)', color: '#0057FF' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// LocalBusiness JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'XpressGo',
  description: 'Pre-order coffee and food service in Tashkent',
  url: 'https://xpressgo.uz',
  telephone: '+998901234567',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tashkent',
    addressCountry: 'UZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.2995,
    longitude: 69.2401,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:00',
    closes: '23:00',
  },
  sameAs: [
    'https://t.me/xpressgo',
    'https://instagram.com/xpressgo',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
