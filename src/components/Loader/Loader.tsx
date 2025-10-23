'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styles from './Loader.module.scss'
import { Comforter } from 'next/font/google'

const comforterFont = Comforter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
  variable: '--font-comforter',
})

export const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const loaderRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progressRef.current && numberRef.current) {
      gsap.to(progressRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(numberRef.current, {
        textContent: Math.round(progress),
        duration: 0.5,
        snap: { textContent: 1 },
        ease: 'power2.out',
      })
    }

    if (progress === 100) {
      const tl = gsap.timeline()
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      })
      tl.to(loaderRef.current, {
        display: 'none',
        duration: 0,
      })
    }
  }, [progress])

  return (
    <div ref={loaderRef} className={styles.loaderOverlay}>
      <div className={styles.content}>
        {/* Проценты */}
        <div className={`${styles.percentage}`}>
          <span className={`${comforterFont.className}`} ref={numberRef}>
            0
          </span>
          <span className={`${comforterFont.className}`}>%</span>
        </div>
        {/* Прогресс-бар */}
        <div className={styles.progressBar}>
          <div ref={progressRef} className={styles.progressFill} />
        </div>
        <div className={`${styles.title} ${comforterFont.className}`}>
          Semenov&nbsp;&nbsp;Demian
        </div>
      </div>
    </div>
  )
}
