'use client'
import styles from './ScrollIcon.module.scss'
import { FC, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface ScrollIconProps {
  text?: string
  dir?: 'up' | 'down' | 'left' | 'right'
}

export const ScrollIcon: FC<ScrollIconProps> = ({ text, dir = 'down' }) => {
  const direction =
    dir === 'down'
      ? ''
      : dir === 'up'
      ? styles.up
      : dir === 'right'
      ? styles.right
      : styles.left

  const iconRef = useRef<HTMLDivElement>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    // Проверяем, что мы на клиенте и компонент еще не анимировался
    if (!iconRef.current || hasAnimatedRef.current) return

    const hideIcon = () => {
      if (hasAnimatedRef.current) return
      hasAnimatedRef.current = true
      gsap.to(iconRef.current, { opacity: 0, duration: 1 })
    }

    // Обработчики событий
    const handleWheel = () => {
      hideIcon()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        [
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'PageUp',
          'PageDown',
          'Home',
          'End',
          ' ',
        ].includes(e.key)
      ) {
        hideIcon()
      }
    }

    const handleTouchStart = () => {
      hideIcon()
    }

    // Добавляем обработчики событий
    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })

    // Очистка
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
    }
  }, [])

  return (
    <div ref={iconRef} className={styles.icon__area}>
      <div className={`${styles.icon__wrapper} ${direction}`}>
        <div className={styles.icon__arrow}>
          <div className={styles.icon__div}></div>
          <div className={styles.icon__div}></div>
        </div>
        <div className={styles.icon__arrow}>
          <div className={styles.icon__div}></div>
          <div className={styles.icon__div}></div>
        </div>
        <div className={styles.icon__arrow}>
          <div className={styles.icon__div}></div>
          <div className={styles.icon__div}></div>
        </div>
      </div>
      <p className={styles.icon__text}>{text}</p>
    </div>
  )
}
