import { Cube } from '@/components/Cube/Cube'
import Link from 'next/link'
import { Button } from '@/components/Button/Button'

export default function Page() {
  return (
    <>
      <Cube />
      <Link href="/skills">
        <Button label="BUTTON" repeatLabelCount={9} />
      </Link>
    </>
  )
}
