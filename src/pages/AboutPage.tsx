import { ContactSection } from '../components/ContactSection'
import { Interests } from '../components/Interests'
import { PageTransition } from '../components/PageTransition'
import { ParallaxImage } from '../components/ParallaxImage'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionMeta } from '../components/SectionMeta'
import { WorkProcess } from '../components/WorkProcess'
import { getProject } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'
import { assetPath } from '../utils/assetPath'


export function AboutPage() {
  usePageMeta({
    title: 'About Jugin Muzhaqi — London Web Developer',
    description:
      'Learn more about Jugin Muzhaqi, a London-based web developer and designer focused on responsive, accessible and user-friendly digital experiences.',
  })

  const romaMia = getProject('roma-mia')

  return (
    <PageTransition className="about-page theme-light">

      <section className="about-hero section-pad">
        <div className="about-hero__grid">
          <Reveal className="about-hero__label">
            <p>A -</p>
          </Reveal>

          <Reveal className="about-hero__title">
            <h1>
              Passionate
              <span>Web Developer</span>
            </h1>
          </Reveal>

          <div className="about-hero__image">
            <ParallaxImage
              src={assetPath('images/editorial/about-laptop.png')}
              alt="Hands typing on a laptop"
              amount={28}
              direction="up"
              reveal
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="about-bio section-pad">
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
              I’m Jugin Muzhaqi, a web developer and designer based in London. I
              recently graduated in web design and web development, and I’m focused
              on building websites that are clean, responsive and easy to use.
            </p>

            <p>
              I enjoy combining visual design with front-end development, creating
              interfaces that look considered and work smoothly across devices.
            </p>
          </Reveal>
        </div>
      </section>

      <WorkProcess />

      <Interests />

      {romaMia && (
        <section className="about-featured-project work-projects section-pad">
          <SectionMeta
            label="D -"
            center="Recent project"
            right={romaMia.category}
          />

          <div className="project-list">
            <ProjectCard project={romaMia} index={1} />
          </div>
        </section>
      )}

      <ContactSection label="E -" />
    </PageTransition>
  )
}