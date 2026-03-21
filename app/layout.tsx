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
  title: 'XpressGo — Navbatsiz qahva buyurtma',
  description: 'XpressGo — Toshkentda navbatsiz qahva buyurtma bering. Tez, qulay, arzon.',
  keywords: ['qahva', 'navbatsiz qahva', 'Toshkent', 'XpressGo', 'coffee'],
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
  },
  openGraph: {
    type: 'website',
    locale: 'uz_UZ',
    url: 'https://xpressgo.uz',
    title: 'XpressGo',
    description: 'Navbatsiz qahva buyurtma bering',
    siteName: 'XpressGo',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'XpressGo - Navbatsiz xizmat' },
      { url: '/icon-512.png', width: 512, height: 512, alt: 'XpressGo icon' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XpressGo — Navbatsiz qahva buyurtma',
    description: 'XpressGo — Toshkentda navbatsiz qahva buyurtma bering. Tez, qulay, arzon.',
    images: ['/og-image.jpg'],
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
    icon: '/icon-light-32x32.png',
    shortcut: '/icon-light-32x32.png',
    apple: '/apple-icon.png',
    other: [
      { rel: 'manifest', url: '/manifest.json' },
      { rel: 'icon', url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
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
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'XpressGo',
    url: 'https://xpressgo.uz',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://xpressgo.uz/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Bosh sahifa',
        item: 'https://xpressgo.uz/',
      },
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'XpressGo',
    url: 'https://xpressgo.uz',
    logo: 'https://xpressgo.uz/icon-512.png',
    sameAs: [
      'https://t.me/xpressgo',
      'https://instagram.com/xpressgo',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+998901234567',
        contactType: 'customer service',
        areaServed: 'UZ',
        availableLanguage: ['uz', 'ru', 'en'],
      },
    ],
  }

  return (
    <html lang="uz" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
