import './globals.scss'
import type { Metadata } from 'next'
import { Cube } from '@/components/Cube/Cube'
import { Header } from '@/components/Header/Header'
import { LoadingProvider } from '@/context/LoadingContext'
import { Loader } from '@/components/Loader/Loader'
import { NavLoader } from '@/components/Loader/NavLoader'
// import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Web-developer Portfolio',
  description: 'Portfolio of a web developer showcasing skills and projects',
  keywords: ['web development', 'portfolio', 'react', 'next.js'],
  authors: [{ name: 'Demyan Semenov' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Web-developer Portfolio',
    description: 'Portfolio of a web developer showcasing skills and projects',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="html full-screen" lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#181818" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
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
