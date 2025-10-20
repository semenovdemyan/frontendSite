// AdvancedTextShaker.tsx
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './TextShaker.scss'

interface AdvancedTextShakerProps {
  text: string
  intensity?: number
  speed?: number
  className?: string
}

export const AdvancedTextShaker: React.FC<AdvancedTextShakerProps> = ({
  text,
  intensity = 1,
  speed = 1,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const chars = containerRef.current.querySelectorAll('.shaking-char')
    if (chars.length === 0) return

    const tl = gsap.timeline({
      repeat: -1,
      repeatRefresh: true,
    })

    chars.forEach((char, index) => {
      tl.to(
        char,
        {
          duration: 0.08 * speed,
          x: () => gsap.utils.random(-3, 3) * intensity,
          y: () => gsap.utils.random(-2, 2) * intensity,
          rotation: () => gsap.utils.random(-2, 2) * intensity,
          scale: () => gsap.utils.random(0.95, 1.05),
          ease: 'power1.inOut',
          stagger: {
            each: 0.03 * speed,
            from: 'random',
          },
        },
        index * 0.01
      )
    })

    return () => {
      tl.kill()
    }
  }, [text, intensity, speed])

  const characters = text.split('')

  return (
    <div
      ref={containerRef}
      className={`text-shaker-container advanced ${className}`}
    >
      <span className="shaking-text split-chars">
        {characters.map((char, index) => (
          <span
            key={index}
            className="shaking-char"
            style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
          >
            {char}
          </span>
        ))}
      </span>
    </div>
  )
}
