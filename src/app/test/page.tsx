'use client'
// import { useRef, useEffect } from 'react'
// import gsap from 'gsap'
// import { Video } from '@/components/Video/Video'
// import { TextShaker } from '@/components/TextShaker/TextShaker'

export default function Page() {
  // const screenSize = useScreenSize()
  // const [currentPage, setCurrentPage] = useState<
  //   'Start' | 'Me' | 'MySkills' | 'Contacts'
  // >('Start')
  // const [lang, setLang] = useState<'en' | 'ru'>('ru')
  // const videoRef = useRef<HTMLVideoElement>(null)
  // const videoContainerRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   const video = videoRef.current
  //   if (!video) return

  //   const handleVideoEnd = () => {
  //     // Анимация исчезания видео
  //     gsap.to(videoContainerRef.current, {
  //       opacity: 0,
  //       duration: 1,
  //       ease: 'power2.inOut',
  //       onComplete: () => {
  //         // Скрываем видео после анимации
  //         if (videoContainerRef.current) {
  //           videoContainerRef.current.style.display = 'none'
  //         }
  //       },
  //     })
  //   }

  //   const handleTimeUpdate = () => {
  //     // Запускаем анимацию за 1 секунду до окончания видео
  //     if (video.duration - video.currentTime <= 1) {
  //       handleVideoEnd()
  //       video.removeEventListener('timeupdate', handleTimeUpdate)
  //     }
  //   }

  //   // Вариант 1: По времени (за 1 секунду до конца)
  //   video.addEventListener('timeupdate', handleTimeUpdate)

  //   // Вариант 2: По событию окончания видео
  //   // video.addEventListener('ended', handleVideoEnd)

  //   return () => {
  //     video.removeEventListener('timeupdate', handleTimeUpdate)
  //     video.removeEventListener('ended', handleVideoEnd)
  //   }
  // }, [])
  return (
    <>
      {/* <section
        ref={videoContainerRef}
        className="video"
        style={{
          position: 'absolute',
          zIndex: 999999,
          top: 0,
          width: '100vw',
          height: '100dvh',
        }}
      >
        <Video
          autoPlay={true}
          src="videos/final.module.mp4"
          muted={true}
          loop={false}
          poster="/videos/rita.jpg"
          width={'100vw'}
          height={'auto'}
          preload="none"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          tracks={[
            {
              src: '/captions/en.vtt',
              kind: 'subtitles',
              srcLang: 'en',
              label: 'English',
            },
          ]}
        />
      </section> */}
      {/* {screenSize !== '--mobile' && <VideoWithDelay />} */}
      {/* <TextShaker
        text="New value"
        text2="New wonder"
        text3="New style"
        count={40}
        radius={60}
      /> */}
    </>
  )
}
