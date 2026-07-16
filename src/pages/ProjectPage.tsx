import { motion, useReducedMotion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ParallaxImage } from '../components/ParallaxImage'
import { Reveal } from '../components/Reveal'
import { getProject, projects } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function ProjectPage() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  const reduceMotion = useReducedMotion()

  useDocumentTitle(project ? `${project.title} — Jugin Muzhaqi` : 'Project not found')

  if (!project) {
    return <Navigate to="/work" replace />
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]

  return (
    <motion.main
      className="project-page"
      initial={
        reduceMotion
          ? { opacity: 0 }
          : { clipPath: 'inset(100% 0 0 0)', opacity: 0.98 }
      }
      animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -24 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.85, ease: [0.76, 0, 0.24, 1] }}
    >
      <header className="project-page__topbar">
        <p>{project.title}</p>
        <a href={project.externalUrl} target="_blank" rel="noreferrer">
          {project.externalLabel}
        </a>
        <Link to="/work">Close</Link>
      </header>

      <section className="project-page__intro section-pad">
        <div className="project-page__information">
          <Reveal>
            <p className="project-page__lead">{project.introduction}</p>
          </Reveal>

          <Reveal className="project-details" delay={0.08}>
            <h1>Project details</h1>
            <dl>
              <div>
                <dt>Stack</dt>
                <dd>{project.stack.join(', ')}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="project-page__learning" delay={0.12}>
            {project.learning.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="project-page__repo" delay={0.14}>
            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
              View code on GitHub ↗
            </a>
          </Reveal>
        </div>

        <div className="project-page__cover">
          <ParallaxImage
            src={project.cover}
            alt={project.coverAlt}
            amount={32}
            direction="up"
            reveal
            loading="eager"
          />
        </div>
      </section>

      <section className="project-gallery section-pad" aria-label={`${project.title} screenshots`}>
        {project.gallery.map((image, index) => (
          <Reveal
            className={`project-gallery__item project-gallery__item--${index + 1}`}
            key={image.src}
          >
            <ParallaxImage
              src={image.src}
              alt={image.alt}
              amount={index % 2 === 0 ? 50 : 34}
              direction={image.direction}
              reveal
            />
          </Reveal>
        ))}
      </section>

      <section className="project-page__next section-pad">
        <p>Next project</p>
        <Link to={`/work/${nextProject.slug}`}>
          {nextProject.title}
          <span aria-hidden="true">↗</span>
        </Link>
        <Link className="project-page__back" to="/work">
          Back to work
        </Link>
      </section>
    </motion.main>
  )
}
