// components/NavLoader/NavLoader.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useLoading } from '@/context/LoadingContext'

export const NavLoader: React.FC = () => {
  const { isNavigating, setNavigating } = useLoading()
  const [progress, setProgress] = useState(0)
  const loaderRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  // Сбрасываем прогресс когда начинается навигация
  useEffect(() => {
    if (isNavigating) {
      setProgress(0)
    }
  }, [isNavigating])

  // Автоматическое заполнение прогресса при навигации
  useEffect(() => {
    if (!isNavigating) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 20
      })
    }, 80)

    return () => clearInterval(interval)
  }, [isNavigating])

  // Анимации появления/исчезновения
  useEffect(() => {
    if (!loaderRef.current) return

    if (isNavigating) {
      // Анимация появления
      const tl = gsap.timeline()
      tl.set(loaderRef.current, { display: 'block' })
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
      tl.fromTo(
        '.loader-particle',
        {
          scale: 0,
          opacity: 0,
          x: '0vw',
          y: '0vh',
        },
        {
          scale: 1,
          opacity: 1,
          x: () => `${gsap.utils.random(-10, 10)}vw`,
          y: () => `${gsap.utils.random(-10, 10)}vh`,
          duration: 0.6,
          stagger: 0.08,
          ease: 'back.out(1.7)',
        },
        '-=0.2'
      )
    }
  }, [isNavigating])

  // Автоматическое скрытие и сброс состояния когда прогресс достиг 100%
  useEffect(() => {
    if (progress === 100 && loaderRef.current) {
      const tl = gsap.timeline()

      // Анимация исчезновения частиц
      tl.to('.loader-particle', {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        stagger: 0.03,
        ease: 'power2.in',
      })

      // Скрываем оверлей
      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.out',
        },
        '-=0.1'
      )

      // Прячем элемент
      tl.set(loaderRef.current, { display: 'none' })

      // Сбрасываем состояние навигации после завершения анимации
      tl.call(() => {
        setNavigating(false)
      })
    }
  }, [progress, setNavigating])

  if (!isNavigating) return null

  return (
    <div
      ref={loaderRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100dvh',
        display: 'none',
        zIndex: 9998,
        pointerEvents: 'none',
      }}
    >
      {/* Затемненный оверлей */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100dvh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(5px)',
        }}
      />

      {/* Анимированные частицы */}
      <div
        ref={particlesRef}
        style={{ position: 'relative', width: '100%', height: '100%' }}
      >
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="loader-particle"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '8px',
              height: '8px',
              backgroundColor: '#4F46E5',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Минималистичный индикатор прогресса */}
      <div
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '1px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            backgroundColor: '#4F46E5',
            width: `${progress}%`,
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Текст */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '1.2rem',
          opacity: 0.8,
          textAlign: 'center',
        }}
      >
        Loading... {Math.round(progress)}%
      </div>
    </div>
  )
}
