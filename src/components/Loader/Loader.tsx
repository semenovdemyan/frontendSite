'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styles from './Loader.module.scss'

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
        duration: 0.8,
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
        <div className={styles.title}>SEMENOV DEMYAN</div>

        <p className={styles.loadingText}>Loading...</p>

        {/* Прогресс-бар */}
        <div className={styles.progressBar}>
          <div ref={progressRef} className={styles.progressFill} />
        </div>

        {/* Проценты */}
        <div className={styles.percentage}>
          <span ref={numberRef}>0</span>
          <span>%</span>
        </div>
      </div>
    </div>
  )
}
