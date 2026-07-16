import { ContactSection } from '../components/ContactSection'
import { PageTransition } from '../components/PageTransition'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionMeta } from '../components/SectionMeta'
import { projects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function WorkPage() {
  useDocumentTitle('Work — Jugin Muzhaqi')

  return (
    <PageTransition className="work-page theme-light">
      <section className="work-intro section-pad">
        <SectionMeta label="A -" />
        <div className="work-intro__grid">
          <Reveal>
            <h1>
              Projects<sup>04</sup>
            </h1>
          </Reveal>
          <Reveal className="work-intro__copy" delay={0.08}>
            <p>
              A selected collection of projects built while developing my skills in web design,
              front-end development and user-focused digital experiences.
            </p>
            <p>
              These projects explore accessibility, responsive layouts, API integration,
              multi-page websites, collaboration tools and full-stack planning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="work-projects section-pad">
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <ContactSection label="B -" />
    </PageTransition>
  )
}
