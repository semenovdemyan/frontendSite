import { useState, useEffect } from 'react'

type ScreenSize =
  | '--mobile' // меньше 768px
  | '--pad' // от 768px до 1024px
  | '--desktop-s' // от 1024px до 1440px
  | '--desktop-m' // от 1440px до 2560px
  | '--desktop-l' // от 2560px до 3440px

const getScreenSize = (width: number): ScreenSize => {
  if (width < 768) return '--mobile'
  if (width <= 1024) return '--pad'
  if (width <= 1440) return '--desktop-s'
  if (width <= 2560) return '--desktop-m'
  return '--desktop-l'
}

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(() => {
    if (typeof window !== 'undefined') {
      return getScreenSize(window.innerWidth)
    }
    return '--desktop-s'
  })

  useEffect(() => {
    const handleResize = () => setScreenSize(getScreenSize(window.innerWidth))

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize
}
