import type { Metadata } from 'next'
import './globals.css'
import { Cube } from '@/components/Cube/Cube'
import { store } from '../store/store'

import { Provider } from 'react-redux'
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
      <body>
        <Provider store={store}>
          <Cube />
          {children}
        </Provider>
      </body>
    </html>
  )
}
