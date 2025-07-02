'use client'

import React, { useEffect, useRef, useCallback } from 'react'
import styles from './Slider.module.scss'

const slidesData = [
  {
    title: 'Snow in the desert',
    subtitle: 'Love, death & robots',
    bgGradient: 'linear-gradient(229.99deg, #11dee9 -26%, #017e8b 145%)',
  },
  {
    title: 'Life Hutch',
    subtitle: 'Love, death & robots',
    bgGradient: 'linear-gradient(215.32deg, #f90306 -1%, #9e0706 124%)',
  },
  {
    title: 'Zima Blue',
    subtitle: 'Love, death & robots',
    bgGradient: 'linear-gradient(221.87deg, #8308ea 1%, #5305af 128%)',
  },
  {
    title: 'Automated Customer Service',
    subtitle: 'Love, death & robots',
    bgGradient: 'linear-gradient(220.16deg, #ffe101 -8%, #f39102 138%)',
  },
]

const images = [
  'https://images.unsplash.com/photo-1601574968106-b312ac309953?ixlib=rb-1.2.1&auto=format&fit=crop&w=1996&q=80',
  'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2023&q=80',
  'https://images.unsplash.com/photo-1501529301789-b48c1975542a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
]

export const Slider: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const mainSlideRef = useRef<HTMLDivElement>(null)
  const slidesCount = images.length
  const activeIndexRef = useRef(0)
  const isAnimatingRef = useRef(false)
  const touchStartYRef = useRef(0)

  useEffect(() => {
    if (sidebarRef.current)
      // Сдвигаем sidebar вверх изначально, чтобы он мог двигаться вниз при листании
      sidebarRef.current.style.top = `-${(slidesCount - 1) * 100}vh`
  }, [slidesCount])

  const changeSlide = useCallback(
    (direction: 'up' | 'down') => {
      if (isAnimatingRef.current) return
      isAnimatingRef.current = true

      activeIndexRef.current =
        direction === 'down'
          ? (activeIndexRef.current + 1) % slidesCount
          : (activeIndexRef.current - 1 + slidesCount) % slidesCount

      if (mainSlideRef.current)
        mainSlideRef.current.style.transform = `translateY(-${
          activeIndexRef.current * 100
        }vh)`
      if (sidebarRef.current)
        sidebarRef.current.style.transform = `translateY(${
          activeIndexRef.current * 100
        }vh)`

      setTimeout(() => {
        isAnimatingRef.current = false
      }, 200)
    },
    [slidesCount]
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') changeSlide('up')
      else if (e.key === 'ArrowDown') changeSlide('down')
    }
    const onTouchStart = (e: TouchEvent) =>
      (touchStartYRef.current = e.touches[0].clientY)
    const onTouchEnd = (e: TouchEvent) => {
      const diff = touchStartYRef.current - e.changedTouches[0].clientY
      if (Math.abs(diff) > 50) changeSlide(diff > 0 ? 'down' : 'up')
    }
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) >= 30) changeSlide(e.deltaY > 0 ? 'down' : 'up')
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('wheel', onWheel, { passive: true })

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('wheel', onWheel)
    }
  }, [changeSlide])

  return (
    <div className={styles.container}>
      <div className={styles.sidebar} ref={sidebarRef}>
        {slidesData.map(({ title, subtitle, bgGradient }, i) => (
          <div
            key={i}
            style={{ background: bgGradient }}
            className={styles.sidebarSlide}
          >
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        ))}
      </div>
      <div className={styles.mainSlide} ref={mainSlideRef}>
        {images.map((url, i) => (
          <div
            key={i}
            style={{ backgroundImage: `url(${url})` }}
            className={styles.mainSlideItem}
          />
        ))}
      </div>
    </div>
  )
}
