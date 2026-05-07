import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Samudra Vinyāsa | Ocean Flow Yoga',
  description: 'Ashtanga Yoga practice inspired by movement, breath, and spiritual connection. Experience the flow of the ocean through transformative yoga sessions.',
  keywords: ['Ashtanga Yoga', 'Yoga Uruguay', 'Samudra Vinyasa', 'Ocean Flow', 'Meditation', 'Wellness'],
  openGraph: {
    title: 'Samudra Vinyāsa | Ocean Flow Yoga',
    description: 'Ashtanga Yoga practice inspired by movement, breath, and spiritual connection.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
