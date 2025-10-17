'use client'
import { FC, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useScreenSize } from '@/hooks/useScreenSize'
import { Button } from '../Button/Button'
import styles from './Header.module.scss'

export const Header: FC = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const screenSize = useScreenSize()
  const isMobile = screenSize === '--mobile'

  const [active, setActive] = useState(!isHome && !isMobile)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive(!isHome && !isMobile)
    }, 10)

    return () => clearTimeout(timeout)
  }, [pathname, isMobile, isHome])

  return (
    <div
      className={`${styles.header__wrapper} ${
        active ? styles['header__wrapper--active'] : ''
      }`}
    >
      <header
        className={`${styles.header} ${active ? styles['header--active'] : ''}`}
      >
        <nav className={styles.header__nav}>
          <Button label="ME" repeatLabelCount={9} href="/about" />
          <Button label="MY WORKS" repeatLabelCount={9} href="/works" />
          <Button label="MY SKILLS" repeatLabelCount={9} href="/skills" />
          <Button label="MY CONTACTS" repeatLabelCount={9} href="/contacts" />
        </nav>
      </header>
    </div>
  )
}
