import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://omniflow.com'

export const metadata: Metadata = {
  title: 'Omni Flow | Web Design, Development & Digital Marketing Agency',
  description: 'Custom website design and development, digital marketing, workflow automation, and SMM services for businesses worldwide. Get your free consultation today.',
  keywords: 'website design, web development, digital marketing, SMM, workflow automation, custom website design, business website',
  generator: 'v0.app',
  robots: 'index, follow',
  authors: [
    {
      name: 'Omni Flow',
      url: baseUrl,
    },
  ],
  creator: 'Omni Flow',
  publisher: 'Omni Flow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Omni Flow',
    title: 'Omni Flow | Web Design, Development & Digital Marketing',
    description: 'Transform your business with custom website design, web development, and digital marketing solutions.',
    images: [
      {
        url: `${baseUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Omni Flow - Web Design & Development Agency',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omni Flow | Web Design & Digital Agency',
    description: 'Custom website design, development, and digital marketing services.',
    images: [`${baseUrl}/logo.png`],
    creator: '@omniflow',
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
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0e27' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Omni Flow',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'Web design, development, digital marketing, and automation services',
    sameAs: [
      'https://www.facebook.com/omniflow',
      'https://www.twitter.com/omniflow',
      'https://www.linkedin.com/company/omniflow',
      'https://www.instagram.com/omniflow',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+923033393222',
      availableLanguage: 'en',
    },
    areaServed: {
      '@type': 'World',
    },
  }

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
