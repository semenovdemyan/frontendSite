'use client'

import React, { useEffect, useRef } from 'react'
import styles from './MarqueeCross.module.scss'

const MarqueeCross: React.FC = () => {
  const marquee1Ref = useRef<HTMLDivElement>(null)
  const marquee2Ref = useRef<HTMLDivElement>(null)
  const itemCount = 20
  const content = '<span>ПРИВЕТ</span>'.repeat(itemCount)

  const calculateWidth = () => {
    const marquee1 = marquee1Ref.current
    const marquee2 = marquee2Ref.current

    if (!marquee1 || !marquee2) return

    // временно вставим один элемент, чтобы замерить ширину
    marquee1.innerHTML = '<span>ПРИВЕТ</span>'
    const span = marquee1.querySelector('span')
    if (!span) return

    const spanWidth = span.offsetWidth + 10
    const blockWidth = spanWidth * itemCount
    const totalWidth = blockWidth * 2

    // вставляем повторенный контент
    marquee1.innerHTML = content + content
    marquee2.innerHTML = content + content

    marquee1.style.width = `${totalWidth}px`
    marquee2.style.width = `${totalWidth}px`

    marquee1.style.animation = `marqueeScrollReverse ${
      5 * (blockWidth / window.innerWidth)
    }s linear infinite`
    marquee2.style.animation = `marqueeScroll ${
      5 * 1.1 * (blockWidth / window.innerWidth)
    }s linear infinite`
  }

  useEffect(() => {
    calculateWidth()
    window.addEventListener('resize', calculateWidth)
    return () => window.removeEventListener('resize', calculateWidth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.marqueeContainer} ${styles.marqueeContainer1}`}>
        <div
          className={`${styles.marquee} ${styles.marquee1}`}
          ref={marquee1Ref}
        />
      </div>
      <div className={`${styles.marqueeContainer} ${styles.marqueeContainer2}`}>
        <div
          className={`${styles.marquee} ${styles.marquee2}`}
          ref={marquee2Ref}
        />
      </div>
    </div>
  )
}

export default MarqueeCross
