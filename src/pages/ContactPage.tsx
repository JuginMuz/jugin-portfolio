import { motion } from 'framer-motion'
import { PageTransition } from '../components/PageTransition'
import { Reveal } from '../components/Reveal'
import { site } from '../data/site'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function ContactPage() {
  useDocumentTitle('Contact — Jugin Muzhaqi')

  return (
    <PageTransition className="contact-page theme-dark">

      <section className="contact-page__email section-pad">
        <Reveal>
          <p className="contact-page__kicker">
            Send a message
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <a
            className="contact-page__email-link"
            href={`mailto:${site.email}`}
          >
            <span>jugin.muzhaqi7</span>
            <span>@gmail.com</span>
          </a>
        </Reveal>
      </section>

      <section className="contact-page__social section-pad">
        <Reveal>
          <p className="contact-page__kicker">
            Or let’s connect on socials
          </p>
        </Reveal>

        <div className="contact-page__social-links">
          {Object.entries(site.social).map(([name, url], index) => (
            <Reveal
              key={name}
              delay={0.06 * index}
            >
              <motion.a
                href={url}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  x: 10,
                }}
                transition={{
                  duration: 0.28,
                }}
              >
                {name}
                <span aria-hidden="true"> ↗</span>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <div className="contact-page__footer">
          <p>
            {site.name}
            <span>{site.role}</span>
          </p>

          <p>London, United Kingdom</p>
        </div>
      </section>
    </PageTransition>
  )
}