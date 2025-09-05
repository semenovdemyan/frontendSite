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

  useEffect(() => {
    if (iconRef.current) {

      const timer = setTimeout(() => {
        gsap.to(iconRef.current, { opacity: 0, duration: 1 })
      }, 8000)

      return () => clearTimeout(timer)
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
