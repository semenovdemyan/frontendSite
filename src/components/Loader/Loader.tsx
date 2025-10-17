'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

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
    <div
      ref={loaderRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Логотип */}
        <div
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#FFF',
          }}
        >
          Your Logo
        </div>

        {/* Текст Loading */}
        <p
          style={{
            color: '#FFF',
            fontSize: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          Loading...
        </p>

        {/* Прогресс-бар */}
        <div
          style={{
            width: '300px',
            height: '2px',
            backgroundColor: '#333',
            borderRadius: '1px',
            overflow: 'hidden',
            marginBottom: '1rem',
          }}
        >
          <div
            ref={progressRef}
            style={{
              height: '100%',
              backgroundColor: '#FFF',
              width: '0%',
            }}
          />
        </div>

        {/* Проценты */}
        <div
          style={{
            color: '#FFF',
            fontSize: '1.25rem',
          }}
        >
          <span ref={numberRef}>0</span>
          <span>%</span>
        </div>
      </div>
    </div>
  )
}
