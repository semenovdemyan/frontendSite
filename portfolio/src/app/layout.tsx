import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web-developer Portfolio',
  description: 'Portfolio of a web developer showcasing skills and projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en/ru">
      <body className={``}>{children}</body>
    </html>
  )
}
