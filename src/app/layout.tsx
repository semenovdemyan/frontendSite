import './globals.css'
import type { Metadata } from 'next'
import { Cube } from '@/components/Cube/Cube'
import { Header } from '@/components/Header/Header'
export const metadata: Metadata = {
  title: 'Web-developer Portfolio',
  description: 'Portfolio of a web developer showcasing skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        style={{ background: 'transparent', height: '100vh', width: '100vw' }}
      >
        <Header />
        <Cube />
        {children}
      </body>
    </html>
  )
}
