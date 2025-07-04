'use client'

import styles from './Button.module.scss'
import React, { ReactNode } from 'react'

interface ButtonProps {
  label?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  icon?: boolean
  children?: ReactNode
  repeatLabelCount?: number
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  className = '',
  icon = false,
  children,
  repeatLabelCount = 6,
}) => {
  return (
    <div className={styles.btnWrapper}>
      <button
        type={type}
        onClick={onClick}
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
