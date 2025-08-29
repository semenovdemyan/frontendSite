'use client'
import './Cube.scss'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useScreenSize } from '@/hooks/useScreenSize'

export const Cube: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null)
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false)
  const screenSize = useScreenSize()
  const isMobile = screenSize === '--mobile'

  useEffect(() => {
    const cubeElement = cubeRef.current

    if (cubeElement) {
      gsap.set(cubeElement, {
        x: window.innerWidth - 200,
        y: window.innerHeight - 200,
        rotationZ: 25,
      })

      const initialAnimation = gsap.to(cubeElement, {
        x: window.innerWidth / 2 - 100,
        y: window.innerHeight / 2 - 100,
        duration: 1.5,
        ease: 'power1.out',
        onComplete: () => setIsInitialAnimationDone(true),
      })

      return () => {
        initialAnimation.kill()
      }
    }
  }, [])

  useEffect(() => {
    if (isInitialAnimationDone) {
      const handleMouseMove = (event: MouseEvent) => {
        if (cubeRef.current) {
          const { innerWidth, innerHeight } = window
          const { clientX, clientY } = event

          const xOffset = (clientX - innerWidth / 2) / innerWidth
          const yOffset = (clientY - innerHeight / 2) / innerHeight

          gsap.to(cubeRef.current, {
            x: -xOffset * 270,
            y: -yOffset * 270,
            rotationX: yOffset * 145,
            rotationY: xOffset * 145,
            duration: 0.8,
            ease: 'power2.out',
          })
        }
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isInitialAnimationDone])

  if (isMobile) return null

  return (
    <div className="scene">
      <div className="cube" ref={cubeRef}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`cube__face cube__face--${i + 1}`}>
            {Array.from({ length: 4 }).map((_, j) => (
              <div key={j} className="cube__square" />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
