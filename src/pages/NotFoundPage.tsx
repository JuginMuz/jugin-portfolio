import { Link } from 'react-router-dom'
import { PageTransition } from '../components/PageTransition'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('Page not found — Jugin Muzhaqi')

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
