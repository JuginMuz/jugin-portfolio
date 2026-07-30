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
        <div className="home-hero__location-row">
          <p className="home-hero__location">
            <span>{site.location[0]}</span>
            <span>{site.location[1]}</span>
          </p>
        </div>
        <p className="home-hero__mobile-location">
          {site.location[0]}
          <span>{site.location[1]}</span>
        </p>

        <Reveal 
          className="home-hero__title-wrap" 
          direction="left"
          distance={60}
          duration={0.9}
          amount={0.1}>
          <h1 className="home-hero__title">
            <span className="home-hero__title-line">Web</span>
            <span className="home-hero__title-line">Developer</span>
          </h1>
        </Reveal>

        <Reveal 
          className="home-hero__image-wrap"
          direction="left"
          distance={60}
          delay={0.12}
          duration={0.95}
          amount={0.1}
        >
          <ParallaxImage
            className="home-hero__portrait"
            src="/images/editorial/hero-portrait.png?v=2"
            alt="Jugin Muzhaqi standing with his arms crossed"
            amount={8}
            direction="up"
            loading="eager"
          />
        </Reveal>
      </section>

      <section className="home-intro section-pad">
        <Reveal className="home-intro__arrow" 
          direction="left"
          distance={30}
          duration={0.75}
        >
          <span aria-hidden="true">↓</span>
        </Reveal>

        <Reveal 
          className="home-intro__copy"
          direction="left"
          distance={50}
          duration={0.85}
        >
          <p>
            I design and build responsive websites with a focus on clean interfaces and user
            experience.
          </p>
        </Reveal>

        <Reveal 
          className="home-intro__name"
          direction="left"
          distance={60}
          delay={0.12}
          duration={0.9}
        >
          <h2>
            Jugin
            <span>Muzhaqi</span>
          </h2>
        </Reveal>
      </section>

      <section className="home-statement section-pad">
        <SectionMeta label="A -" 
          reveal
          direction="top"
          distance={35}
          duration={0.8}
        />
        <Reveal 
          className="home-statement__copy"
          direction="top"
          distance={45}
          delay={0.1}
          duration={0.9}
          amount={0.2}
        >
          <p>
            I’m a London-based web developer and designer creating responsive websites and
            thoughtful digital experiences. <br></br>I enjoy working between design and code, turning ideas
            into interfaces that feel clear, accessible and easy to use. <br></br><br></br>Outside the screen, you’ll
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
        duration={0.9}
      />
        <div className="home-about__headline">
          <Reveal
            direction="fade"
            duration={0.9}
          >
            <h2>Gaming,</h2>
          </Reveal>
          <div className="home-about__image">
            <ParallaxImage
              src="/images/editorial/dark-souls3.avif"
              alt=""
              amount={38}
              direction="down"
              reveal
            />
          </div>
          <Reveal 
            direction="fade"
            delay={0.1}
            duration={0.9}
          >
            <h2>Football,</h2>
          </Reveal>
          <Reveal 
            direction="fade"
            delay={0.2}
            duration={0.9}
          >
            <h2>Fitness.</h2>
          </Reveal>
        </div>

        <div className="home-about__copy-grid">
          <Reveal 
            className="home-about__copy"
            direction="fade"
            delay={0.25}
            duration={1}
          >
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

      <ContactSection
        label="D -"
        revealDirection="left"
      />
    </PageTransition>
  )
}
