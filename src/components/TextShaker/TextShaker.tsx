import React, { useRef } from 'react'
import styles from './TextShaker.module.scss'

interface TextShakerProps {
  text: string
  text2?: string
  text3?: string
  count?: number
  radius?: number
  className?: string
}

export const TextShaker: React.FC<TextShakerProps> = ({
  text,
  text2,
  text3,
  count = 20,
  radius = 80,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`${styles.textShakerWrapper}`}>
      <div ref={containerRef} className={styles.textShakerContainer}>
        {Array.from({ length: count }).map((_, index) => {
          const angle = (index * 360) / count
          return (
            <div
              key={index}
              className={styles.shakingText}
              style={{
                transform: `
                  rotateX(${angle}deg) 
                  translateZ(${radius * 3}px)
                `,
                zIndex: count - index,
              }}
            >
              <span className={styles.rotatedSpan}>{text}</span>
              {text2 && <span hidden>{text2}</span>}
              {text3 && <span hidden>{text3}</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
