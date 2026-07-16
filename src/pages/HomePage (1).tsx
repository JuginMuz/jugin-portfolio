import { Link } from 'react-router-dom'
import { ContactSection } from '../components/ContactSection'
import { PageTransition } from '../components/PageTransition'
import { ParallaxImage } from '../components/ParallaxImage'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionMeta } from '../components/SectionMeta'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function HomePage() {
  useDocumentTitle('Jugin Muzhaqi — Web Developer')

  return (
    <PageTransition className="home-page theme-light">
      <section className="home-hero section-pad">
        <p className="home-hero__mobile-location">
          {site.location[0]}
          <span>{site.location[1]}</span>
        </p>

        <Reveal className="home-hero__title-wrap" distance={24}>
          <h1 className="home-hero__title">Web Developer</h1>
        </Reveal>

        <div className="home-hero__image-wrap">
          <ParallaxImage
            src="/images/editorial/hero-portrait.png"
            alt=""
            amount={22}
            direction="up"
            reveal
            loading="eager"
          />
        </div>
      </section>

      <section className="home-intro section-pad">
        <Reveal className="home-intro__arrow" distance={10}>
          <span aria-hidden="true">↓</span>
        </Reveal>

        <Reveal className="home-intro__copy">
          <p>
            I design and build responsive websites with a focus on clean interfaces and user
            experience.
          </p>
        </Reveal>

        <Reveal className="home-intro__name" delay={0.08}>
          <h2>
            Jugin
            <span>Muzhaqi</span>
          </h2>
        </Reveal>
      </section>

      <section className="home-statement section-pad">
        <SectionMeta label="A -" />
        <Reveal className="home-statement__copy">
          <p>
            I’m a London-based web developer and designer creating responsive websites and
            thoughtful digital experiences. I enjoy working between design and code, turning ideas
            into interfaces that feel clear, accessible and easy to use. Outside the screen, you’ll
            probably find me gaming, watching football or working out.
          </p>
        </Reveal>
      </section>

      <section className="featured-work section-pad">
        <SectionMeta label="B -" center="Recent projects" right="Web development" />
        <div className="project-list">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <Reveal className="featured-work__all-link">
          <Link className="text-link" to="/work">
            View all four projects <span aria-hidden="true">↗</span>
          </Link>
        </Reveal>
      </section>

      <section className="home-about section-pad">
        <SectionMeta label="C -" right="About me" />
        <div className="home-about__headline">
          <Reveal>
            <h2>Gaming,</h2>
          </Reveal>
          <div className="home-about__image">
            <ParallaxImage
              src="/images/editorial/photographer.png"
              alt=""
              amount={38}
              direction="down"
              reveal
            />
          </div>
          <Reveal delay={0.08}>
            <h2>Football,</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <h2>Fitness.</h2>
          </Reveal>
        </div>

        <div className="home-about__copy-grid">
          <Reveal className="home-about__copy">
            <p>
              My interests shape the way I approach both design and development. Gaming makes me
              notice interaction and feedback, football keeps me connected to teamwork and rhythm,
              and fitness reminds me that progress comes from consistency, discipline and small
              improvements over time.
            </p>
          </Reveal>
          <Reveal className="home-about__link-wrap" delay={0.1}>
            <Link className="text-link" to="/about">
              More about me <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </PageTransition>
  )
}
