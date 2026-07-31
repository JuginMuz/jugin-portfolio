import { motion } from 'framer-motion'
import { site } from '../data/site'
import { Reveal } from './Reveal'
import { SectionMeta } from './SectionMeta'
import type { RevealDirection } from './Reveal'


type ContactSectionProps = {
  label?: string
  dark?: boolean
  revealDirection?: RevealDirection

}




export function ContactSection({
  label = 'D -',
  dark = false,
  revealDirection = 'bottom',
}: ContactSectionProps)  {
  return (
    <section className={`contact-section ${dark ? 'contact-section--dark' : ''}`}>
      <SectionMeta 
        label={label}
        center="Want to work together?"
        right="Send me a message"
        reveal
        direction={revealDirection}
        distance={55}
        duration={0.9}
      />

      <Reveal
          className="contact-section__email-wrap"
          direction={revealDirection}
          distance={48}
          delay={0.1}
          duration={1.25}
        >
          {/* Desktop email */}
          <a
            className="contact-section__email contact-section__email--desktop"
            href={`mailto:${site.email}`}
            aria-label={site.email}
          >
            <span>jugin.muzhaqi7</span>
            <span>@gmail.com</span>
          </a>

          {/* Mobile email */}
          <a
            className="contact-section__email contact-section__email--mobile"
            href={`mailto:${site.email}`}
            aria-label={site.email}
          >
            <span>jugin.</span>
            <span>muzhaqi</span>
            <span>7@gmail</span>
            <span>.com</span>
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
              <span className="contact-section__social-arrow" aria-hidden="true"> ↗</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
