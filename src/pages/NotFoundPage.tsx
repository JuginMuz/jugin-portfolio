import { Link } from 'react-router-dom'
import { PageTransition } from '../components/PageTransition'

export function NotFoundPage() {

  return (
    <PageTransition className="not-found-page theme-light">
      <section className="section-pad">
        <p>404</p>
        <h1>Page not found.</h1>
        <Link className="text-link" to="/">
          Return home ↗
        </Link>
      </section>
    </PageTransition>
  )
}
