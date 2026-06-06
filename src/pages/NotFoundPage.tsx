import { Link } from 'react-router-dom'
import { Button } from '@shared/ui/button'

const NotFoundPage = () => {
  return (
    <section className="space-y-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-muted-foreground">Esta página no existe.</p>
      <Button asChild>
        <Link to="/">Volver al inicio</Link>
      </Button>
    </section>
  )
}

export default NotFoundPage
