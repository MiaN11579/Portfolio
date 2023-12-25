import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import NavBar from '@/components/main/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Mia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-a to-b overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <NavBar />
        {children}
      </body>
    </html>
  )
}
