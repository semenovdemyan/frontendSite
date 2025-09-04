import styles from './ScrollIcon.module.scss'
import { FC } from 'react'

interface ScrollIconProps {
  text?: string
  dir?: 'up' | 'down' | 'left' | 'right'
}

export const ScrollIcon: FC<ScrollIconProps> = ({ text, dir = 'down' }) => {
  const direction =
    dir === 'down'
      ? null
      : dir === 'up'
      ? styles.up
      : dir === 'right'
      ? styles.right
      : styles.left

  return (
    <>
      <div className={styles.icon__area}>
        <div className={`${styles.icon__wrapper} ${direction}`}>
          <div className={styles.icon__arrow}>
            <div className={styles.icon__div}></div>
            <div className={styles.icon__div}></div>
          </div>
          <div className={styles.icon__arrow}>
            <div className={styles.icon__div}></div>
            <div className={styles.icon__div}></div>
          </div>
          <div className={styles.icon__arrow}>
            <div className={styles.icon__div}></div>
            <div className={styles.icon__div}></div>
          </div>
        </div>
        <p className={styles.icon__text}>{text}</p>
      </div>
    </>
  )
}
