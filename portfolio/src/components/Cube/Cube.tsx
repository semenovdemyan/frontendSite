'use client'

import './Cube.scss'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { setRotation, setPosition, setAnimating } from '../../store/cubeSlice'

export const Cube: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch<AppDispatch>()

  const { rotationX, rotationY, rotationZ, positionX, positionY, isAnimating } =
    useSelector((state: RootState) => state.cube)

  useEffect(() => {
    if (cubeRef.current && !isAnimating) {
      dispatch(setAnimating(true))

      gsap.set(cubeRef.current, {
        x: window.innerWidth - 200,
        y: window.innerHeight - 200,
        rotationZ: 25,
      })

      const initialAnimation = gsap.to(cubeRef.current, {
        x: window.innerWidth / 2 - 100,
        y: window.innerHeight / 2 - 100,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
          dispatch(setAnimating(false))
        },
      })

      return () => {
        initialAnimation.kill()
      }
    }
  }, [dispatch, isAnimating])

  useEffect(() => {
    if (!isAnimating) {
      const handleMouseMove = (event: MouseEvent) => {
        const { innerWidth, innerHeight } = window
        const { clientX, clientY } = event

        const xOffset = (clientX - innerWidth / 2) / innerWidth
        const yOffset = (clientY - innerHeight / 2) / innerHeight

        dispatch(
          setRotation({
            x: yOffset * 145,
            y: xOffset * 145,
            z: 25,
          })
        )
        dispatch(
          setPosition({
            x: -xOffset * 270,
            y: -yOffset * 270,
          })
        )
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [dispatch, isAnimating])

  useEffect(() => {
    if (cubeRef.current) {
      gsap.to(cubeRef.current, {
        x: positionX,
        y: positionY,
        rotationX: rotationX,
        rotationY: rotationY,
        rotationZ: rotationZ,
        duration: 1.6,
        ease: 'power2.out',
      })
    }
  }, [positionX, positionY, rotationX, rotationY, rotationZ])

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
