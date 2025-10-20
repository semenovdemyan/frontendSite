'use client'
// import { useRef, useEffect } from 'react'
// import gsap from 'gsap'
import { TextShaker } from '@/components/TextShaker/TextShaker'
export default function Page() {
  // const screenSize = useScreenSize()
  // const [currentPage, setCurrentPage] = useState<
  //   'Start' | 'Me' | 'MySkills' | 'Contacts'
  // >('Start')
  // const [lang, setLang] = useState<'en' | 'ru'>('ru')

  return (
    <>
      {/* {screenSize !== '--mobile' && <VideoWithDelay />} */}
      <TextShaker
        text="New value"
        text2="New wonder"
        text3="New style"
        count={16}
        radius={100}
      ></TextShaker>
    </>
  )
}
