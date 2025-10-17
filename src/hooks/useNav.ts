// hooks/useNavigation.ts
'use client'
import { useLoading } from '@/context/LoadingContext'
import { useRouter } from 'next/navigation'

export const useNavigation = () => {
  const router = useRouter()
  const { setNavigating } = useLoading()

  const navigateWithTransition = (href: string) => {
    // Запускаем анимацию перехода
    setNavigating(true)

    // Навигация с задержкой для плавности анимации
    setTimeout(() => {
      router.push(href)
    }, 500)
  }

  return {
    navigateWithTransition
  }
}