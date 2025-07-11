'use client'

import { FC, useEffect, useState } from 'react'
import styles from './AnimatedBlobs.module.scss'

export const AnimatedBlobs: FC = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  if (width === 0) return null

  return (
    <div className={styles.ABcontainer}>
      <div className={styles.bg}></div>

      <div className={styles.blobsContainer}>
        <div className={styles.blobs_1}></div>
        <div className={styles.blobs_2}></div>
        <div className={styles.blobs_3}></div>
        <div className={styles.blobs_4}></div>
        <div className={styles.blobs_5}></div>
        <div className={styles.blobs_6}></div>
        <div className={styles.blobs_7}></div>
      </div>

      <svg
        width="100vw"
        height="320"
        className={styles.svgMask}
        viewBox={`0 0 ${width} 320`}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="text-mask" maskUnits="userSpaceOnUse">
            <rect width={width} height="320" fill="white" />
            <text
              className={styles.text}
              x={width / 2}
              y={160}
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="'Titan One', cursive"
              fontSize="100"
              fontWeight="700"
              fill="black"
            >
              Lorem ipsum dolor sit.
            </text>
          </mask>
        </defs>

        <rect
          width={width}
          height="320"
          fill="var(--color1)"
          mask="url(#text-mask)"
        />
      </svg>
    </div>
  )
}
