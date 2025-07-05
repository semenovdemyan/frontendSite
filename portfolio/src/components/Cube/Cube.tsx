'use client'
import './Cube.scss'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export const Cube: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null)
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false)

  useEffect(() => {
    const cubeElement = cubeRef.current

    if (cubeElement) {
      // Начальная позиция в правом нижнем углу
      gsap.set(cubeElement, {
        x: window.innerWidth - 200,
        y: window.innerHeight - 200,
        rotationZ: 25,
      })

      // Анимация через секунду, когда куб подплывает к курсору
      const initialAnimation = gsap.to(cubeElement, {
        x: window.innerWidth / 2 - 100, // Позиция куба на 100px от центра
        y: window.innerHeight / 2 - 100,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => setIsInitialAnimationDone(true), // После анимации запускаем основную логику
      })

      // Отменяем анимацию, если компонент размонтирован
      return () => {
        initialAnimation.kill()
      }
    }
  }, []) // Эта анимация выполняется только один раз после монтирования

  useEffect(() => {
    if (isInitialAnimationDone) {
      // Обработчик движения мыши для обычной логики вращения
      const handleMouseMove = (event: MouseEvent) => {
        if (cubeRef.current) {
          const { innerWidth, innerHeight } = window
          const { clientX, clientY } = event

          // Определяем положение мыши по отношению к центру экрана
          const xOffset = (clientX - innerWidth / 2) / innerWidth
          const yOffset = (clientY - innerHeight / 2) / innerHeight

          // Расчёт смещения куба на основе положения мыши
          gsap.to(cubeRef.current, {
            x: -xOffset * 270,
            y: -yOffset * 270,
            rotationX: yOffset * 145,
            rotationY: xOffset * 145,
            duration: 1.6,
            ease: 'power2.out',
          })
        }
      }

      // Добавляем событие для отслеживания движения мыши
      window.addEventListener('mousemove', handleMouseMove)

      // Убираем событие при размонтировании компонента
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [isInitialAnimationDone]) // Следим только за изменением флага состояния

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
