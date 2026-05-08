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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Samudra Vinyāsa | Ashtanga Yoga en Maldonado',
  description: 'Clases de Ashtanga Yoga presenciales en Pinares, Maldonado y virtuales. Una práctica guiada por Rafaela para habitar el cuerpo, la respiración y el movimiento consciente.',
  keywords: ['Ashtanga Yoga', 'Yoga Maldonado', 'Yoga Pinares', 'Yoga Uruguay', 'Samudra Vinyasa', 'Clases de yoga'],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Samudra Vinyāsa | Ashtanga Yoga en Maldonado',
    description: 'Clases presenciales y virtuales de Ashtanga Yoga guiadas por Rafaela.',
    type: 'website',
    images: ['/Logo.jpg'],
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
