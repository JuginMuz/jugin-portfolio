import { motion, useReducedMotion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { getProject } from '../data/projects'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function ProjectPage() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  const reduceMotion = useReducedMotion()

  useDocumentTitle(
    project
      ? `${project.title} — Jugin Muzhaqi`
      : 'Project not found',
  )

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <motion.main
      className="project-page"
      initial={
        reduceMotion
          ? { opacity: 0 }
          : {
              clipPath: 'inset(100% 0 0 0)',
              opacity: 0.98,
            }
      }
      animate={{
        clipPath: 'inset(0% 0 0 0)',
        opacity: 1,
      }}
      exit={
        reduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: -24,
            }
      }
      transition={{
        duration: reduceMotion ? 0.15 : 0.85,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <header className="project-page__topbar">
        <p>{project.title}</p>

        <a
          href={project.externalUrl}
          target="_blank"
          rel="noreferrer"
        >
          {project.externalLabel}
        </a>

        <Link to="/work">Close</Link>
      </header>

      <section className="project-page__layout section-pad">
        <aside className="project-page__information">
          <Reveal>
            <p className="project-page__lead">
              {project.introduction}
            </p>
          </Reveal>

          <Reveal className="project-details" delay={0.06}>
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

          <Reveal
            className="project-page__learning"
            delay={0.1}
          >
            {project.learning.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal
            className="project-page__repo"
            delay={0.12}
          >
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              View code on GitHub ↗
            </a>
          </Reveal>
        </aside>

        <div
          className="project-page__media"
          aria-label={`${project.title} screenshots`}
        >
          {project.gallery.map((image, index) => (
            <Reveal
              className="project-page__media-item"
              key={image.src}
              delay={Math.min(index * 0.04, 0.12)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </motion.main>
  )
}