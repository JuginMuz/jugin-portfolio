import { motion } from 'framer-motion'
import { ContactSection } from '../components/ContactSection'
import { Interests } from '../components/Interests'
import { PageTransition } from '../components/PageTransition'
import { ParallaxImage } from '../components/ParallaxImage'
import { Reveal } from '../components/Reveal'
import { SectionMeta } from '../components/SectionMeta'
import { WorkProcess } from '../components/WorkProcess'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function AboutPage() {
  useDocumentTitle('About — Jugin Muzhaqi')

  return (
    <PageTransition className="about-page theme-light">
      <section className="about-hero section-pad">
        <SectionMeta label="A -" />
        <Reveal className="about-hero__title">
          <h1>
            Passionate
            <span>Web Developer</span>
          </h1>
        </Reveal>
        <div className="about-hero__image">
          <ParallaxImage
            src="/images/editorial/about-laptop.png"
            alt="Hands typing on a laptop"
            amount={28}
            direction="up"
            reveal
            loading="eager"
          />
        </div>
      </section>

      <section className="about-bio section-pad">
        <SectionMeta label="B -" />
        <div className="about-bio__grid">
          <Reveal>
            <h2>
              Based in
              <span>London</span>
            </h2>
          </Reveal>
          <Reveal className="about-bio__note" delay={0.04}>
            <p>Design and development, working together.</p>
          </Reveal>
          <Reveal className="about-bio__copy" delay={0.1}>
            <p>
              I’m Jugin Muzhaqi, a web developer and designer based in London. I recently graduated
              in web design and web development, and I’m focused on building websites that are
              clean, responsive and easy to use.
            </p>
            <p>
              I enjoy combining visual design with front-end development, creating interfaces that
              look considered and work smoothly across devices.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="availability-section section-pad">
        <Reveal className="availability-section__copy">
          <p>Available for junior roles, internships, freelance projects and collaborations.</p>
        </Reveal>
        <div className="availability-section__image">
          <ParallaxImage
            src="/images/editorial/about-eye.png"
            alt=""
            amount={42}
            direction="down"
            reveal
          />
        </div>
      </section>

      <WorkProcess />
      <Interests />

      <section className="about-project section-pad">
        <SectionMeta label="E -" center="Recent project" right="Web development" />
        <motion.a
          className="about-project__link"
          href="https://github.com/JuginMuz/Wedding-Veneto"
          target="_blank"
          rel="noreferrer"
          whileHover="hover"
          initial="rest"
        >
          <div className="about-project__copy">
            <Reveal>
              <h2>
                Wedding
                <span>Veneto</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                A bilingual wedding website built with React, featuring RSVP functionality,
                language switching and responsive layouts.
              </p>
            </Reveal>
          </div>
          <motion.div
            className="about-project__image"
            variants={{ rest: { scale: 1 }, hover: { scale: 1.018 } }}
            transition={{ duration: 0.45 }}
          >
            <img
              src="/images/placeholders/wedding-veneto.svg"
              alt="Wedding Veneto project cover"
            />
            <span>View repository ↗</span>
          </motion.div>
        </motion.a>
      </section>

      <ContactSection label="F -" />
    </PageTransition>
  )
}
