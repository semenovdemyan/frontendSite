'use client'

import styles from './Button.module.scss'
import React, { ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface ButtonProps {
  label?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
  className?: string
  icon?: boolean
  children?: ReactNode
  repeatLabelCount?: number
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  href,
  type = 'button',
  className = '',
  icon = false,
  children,
  repeatLabelCount = 6,
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (onClick) onClick()
    if (href) router.push(href)
  }

  return (
    <div className={styles.btnWrapper}>
      <button
        type={type}
        onClick={handleClick}
        className={`${styles.btn} ${className}`}
      >
        {icon && <span className={styles.icon}>icon</span>}

        {children ? (
          children
        ) : label ? (
          <div className={styles.slider}>
            <div className={styles.slider__label}>{label}</div>
            <div className={styles.slider__track} aria-hidden="true">
              {Array(repeatLabelCount * 2)
                .fill(label)
                .map((text, i) => (
                  <span key={i} className={styles.slider__item}>
                    {text}
                  </span>
                ))}
            </div>
          </div>
        ) : null}
      </button>
    </div>
  )
}
