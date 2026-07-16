import { motion } from 'framer-motion'
import { site } from '../data/site'
import { Reveal } from './Reveal'
import { SectionMeta } from './SectionMeta'

type ContactSectionProps = {
  label?: string
  dark?: boolean
}

const emailLines = ['jugin.muzhaqi7', '@gmail.com']

export function ContactSection({ label = 'D -', dark = false }: ContactSectionProps) {
  return (
    <section className={`contact-section ${dark ? 'contact-section--dark' : ''}`}>
      <SectionMeta label={label} center="Want to work together?" right="Send me a message" />

      <Reveal className="contact-section__email-wrap">
        <a className="contact-section__email" href={`mailto:${site.email}`}>
          {emailLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </a>
      </Reveal>

      <div className="contact-section__footer">
        <p>
          {site.name}
          <span>{site.role}</span>
        </p>
        <div className="contact-section__socials" aria-label="Social links">
          {Object.entries(site.social).map(([name, url]) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, opacity: 0.72 }}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
              <span aria-hidden="true"> ↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
