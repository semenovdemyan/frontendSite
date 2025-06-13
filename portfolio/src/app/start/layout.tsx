import React from 'react'
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{ padding: '2rem' }}>
      <div>{children}</div>
    </div>
  )
}
