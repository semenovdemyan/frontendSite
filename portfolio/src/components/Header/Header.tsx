'use client'
import { FC } from 'react'
import { Button } from '../Button/Button'

export const Header: FC = () => {
  return (
    <>
      <header>
        <nav>
          <Button label="ME" repeatLabelCount={9} href="/about" />
          <Button label="MY WORKS" repeatLabelCount={9} href="/works" />
          <Button label="MY SKILLS" repeatLabelCount={9} href="/skills" />
          <Button label="CONTACTS" repeatLabelCount={9} href="/contacts" />
        </nav>
      </header>
    </>
  )
}
