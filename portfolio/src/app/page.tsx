import Link from 'next/link'
import { CubeClientWrapper } from '../components/CubeClientWrapper/CubeClientWrapper'
import { Button } from '../components/Button/Button'

export default function Page() {
  return (
    <>
      <CubeClientWrapper />
      <Link href="/skills">
        <Button label="BUTTON" repeatLabelCount={9} />
      </Link>
    </>
  )
}
