import './globals.css'
import type { Metadata } from 'next'
import { Cube } from '@/components/Cube/Cube'
import { Header } from '@/components/Header/Header'
import { LoadingProvider } from '@/context/LoadingContext'
import { Loader } from '@/components/Loader/Loader'
import { NavLoader } from '@/components/Loader/NavLoader'
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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </head>
      <body className="body full-screen">
        <LoadingProvider>
          <Loader />
          <NavLoader />
          <Header />
          <Cube />
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
