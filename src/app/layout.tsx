import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Navigation from './_components/layout/Navigation'
// import Footer from './_components/layout/Footer'

import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grupo Miami Music',
  description: 'Grupo Miami Music - Gozadera Total',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
