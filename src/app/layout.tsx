import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import BackgroundEffects from '@/components/BackgroundEffects'
import LangSync from '@/components/LangSync'
import { Analytics } from '@vercel/analytics/react'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
})

const BASE_URL = 'https://mateomoscoloni.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Mate Moscoloni — Freelance Developer & AI Consultant',
  description:
    'Desarrollo web a medida y automatizaciones con IA para empresas. Buenos Aires, Argentina.',
  keywords: [
    'freelance developer',
    'AI consultant',
    'Next.js',
    'automatización',
    'Buenos Aires',
    'desarrollo web',
    'n8n',
    'OpenAI',
  ],
  authors: [{ name: 'Mate Moscoloni', url: BASE_URL }],
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Mate Moscoloni — Freelance Developer & AI Consultant',
    description: 'Web products and AI automations for businesses that want to operate smarter.',
    type: 'website',
    url: BASE_URL,
    siteName: 'Mate Moscoloni',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Mate Moscoloni Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mate Moscoloni — Freelance Developer & AI Consultant',
    description: 'Web products and AI automations for businesses that want to operate smarter.',
    images: ['/opengraph-image'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mate Moscoloni',
  jobTitle: 'Freelance Developer & AI Consultant',
  url: BASE_URL,
  sameAs: [
    'https://www.linkedin.com/in/mateomoscoloni/',
    'https://github.com/MateMoscoloni',
  ],
  knowsAbout: [
    'Web Development',
    'AI Automation',
    'Next.js',
    'n8n',
    'OpenAI API',
    'SQL',
    'Google BigQuery',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased text-[#f0f0f0]`}>
        <BackgroundEffects />
        <LanguageProvider>
          <LangSync />
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
