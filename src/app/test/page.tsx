// import { AnimatedBlobs } from '@/components/AnimatedBlobs/AnimatedBlobs'
import { ScrollIcon } from '@/components/ScrollIcon/ScrollIcon'
export default function Page() {
  return (
    <>
      <p style={{ color: '#FFF', fontSize: '60px' }}>TEST</p>
      {/* <AnimatedBlobs /> */}
      <div>
        <ScrollIcon text="Swipe" dir="right" />
      </div>
      <div style={{ marginTop: '200px' }}>
        <ScrollIcon text="Scroll" />
      </div>
    </>
  )
}
