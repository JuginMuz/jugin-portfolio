import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ContactSection } from '../components/ContactSection'
import { PageTransition } from '../components/PageTransition'
import { ParallaxImage } from '../components/ParallaxImage'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal, SMOOTH_EASE } from '../components/Reveal'
import { SectionMeta } from '../components/SectionMeta'
import { projects } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'
import { site } from '../data/site'
import { assetPath } from '../utils/assetPath'

export function HomePage() {
  usePageMeta({
    title: 'Jugin Muzhaqi — Web Developer & Designer in London',
    description: site.description,
  })

  const reduceMotion = useReducedMotion()

  return (
    <PageTransition className="home-page theme-light">
      <section className="home-hero section-pad">

        <Reveal
          className="home-hero__title-wrap"
          direction="left"
          distance={56}
          duration={1.3}
          amount={0.05}
        >
          <h1 className="home-hero__title">
            <span className="home-hero__title-line">Web</span>
            <span className="home-hero__title-line">Developer</span>
          </h1>
        </Reveal>

        <motion.div
          className="home-hero__image-wrap"
          initial={
            reduceMotion
              ? {
                  opacity: 0,
                }
              : {
                  opacity: 0,
                  x: -42,
                  clipPath: 'inset(0% 100% 0% 0%)',
                }
          }
          animate={
            reduceMotion
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 1,
                  x: 0,
                  clipPath: 'inset(0% 0% 0% 0%)',
                }
          }
          transition={{
            type: 'tween',
            duration: reduceMotion ? 0.2 : 1.45,
            delay: 0.18,
            ease: SMOOTH_EASE,
          }}
          style={{
            willChange: 'transform, opacity, clip-path',
          }}
        >
          <ParallaxImage
            className="home-hero__portrait"
            src={assetPath('images/editorial/hero-portrait.png')}
            alt="Jugin Muzhaqi standing with his arms crossed"
            amount={8}
            direction="up"
            loading="eager"
          />
        </motion.div>
      </section>

      <section className="home-intro section-pad">
        <Reveal
          className="home-intro__arrow"
          direction="left"
          distance={32}
          duration={1.05}
        >
          <span aria-hidden="true">↓</span>
        </Reveal>

        <Reveal
          className="home-intro__copy"
          direction="left"
          distance={46}
          delay={0.06}
          duration={1.2}
        >
          <p>
            I design and build responsive websites with a focus on clean
            interfaces and user experience.
          </p>
        </Reveal>

        <Reveal
          className="home-intro__name"
          direction="left"
          distance={56}
          delay={0.12}
          duration={1.3}
        >
          <h2>
            Jugin
            <span>Muzhaqi</span>
          </h2>
        </Reveal>
      </section>

      <section className="home-statement section-pad">
        <SectionMeta
          label="A -"
          reveal
          direction="top"
          distance={30}
          duration={1.1}
        />

        <Reveal
          className="home-statement__copy"
          direction="top"
          distance={38}
          delay={0.08}
          duration={1.25}
        >
          <p>
            I’m a London-based web developer and designer creating responsive
            websites and thoughtful digital experiences.
            <br />
            I enjoy working between design and code, turning ideas into
            interfaces that feel clear, accessible and easy to use.
            <br />
            <br />
            Outside the screen, you’ll probably find me gaming, watching
            football or working out.
          </p>
        </Reveal>
      </section>

      <section className="featured-work section-pad">
        <SectionMeta
          label="B -"
          center="Recent projects"
          right="Web development"
        />

        <div className="project-list">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <Reveal
          className="featured-work__all-link"
          direction="fade"
          duration={1.1}
        >
          <Link className="text-link" to="/work">
            View all projects <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      </section>

      <section className="home-about section-pad">
        <SectionMeta
          label="C -"
          right="About me"
          reveal
          direction="fade"
          duration={1.2}
        />

        <div className="home-about__headline">
          <Reveal
            direction="fade"
            duration={1.25}
          >
            <h2>Gaming,</h2>
          </Reveal>

          <div className="home-about__image">
            <ParallaxImage
              src={assetPath('images/editorial/dark-souls3.avif')}
              alt="Dark Souls scene"
              amount={38}
              direction="down"
              reveal
            />
          </div>

          <Reveal
            direction="fade"
            delay={0.07}
            duration={1.25}
          >
            <h2>Football,</h2>
          </Reveal>

          <Reveal
            direction="fade"
            delay={0.14}
            duration={1.25}
          >
            <h2>Fitness.</h2>
          </Reveal>
        </div>

        <div className="home-about__copy-grid">
          <Reveal
            className="home-about__copy"
            direction="fade"
            delay={0.18}
            duration={1.25}
          >
            <p>
              My interests shape the way I approach both design and
              development. Gaming makes me notice interaction and feedback,
              football keeps me connected to teamwork and rhythm, and fitness
              reminds me that progress comes from consistency, discipline and
              small improvements over time.
            </p>
          </Reveal>

          <Reveal
            className="home-about__link-wrap"
            direction="fade"
            delay={0.24}
            duration={1.1}
          >
            <Link className="text-link" to="/about">
              More about me <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactSection
        label="D -"
        revealDirection="left"
      />
    </PageTransition>
  )
}