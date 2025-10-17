import { Button } from '@/components/Button/Button'

export default function NotFound() {
  return (
    <div>
      <div>
        <div>
          <h2>404</h2>
          <p>Страница, которую вы ищете, не существует.</p>
        </div>
        <div>
          <Button icon={true} label="Назад" repeatLabelCount={9} href="/" />
        </div>
      </div>
    </div>
  )
}
