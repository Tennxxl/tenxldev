import type { Metadata } from 'next'
import { Inter, VT323 } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-vt323',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tenxl',
  description: 'Frontend / backend | Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${vt323.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased relative">
        {children}
      </body>
    </html>
  )
}
