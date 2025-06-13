import { Cube } from '../components/Cube/Cube'
import { Button } from '../components/Button/Button'

export default function Page() {
  return (
    <>
      <Cube></Cube>
      <Button label="BUTTON" repeatLabelCount={9} className={``}></Button>
    </>
  )
}
