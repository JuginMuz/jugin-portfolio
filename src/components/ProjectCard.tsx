import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ParallaxImage } from './ParallaxImage'
import { Reveal } from './Reveal'

type ProjectCardProps = {
  project: Project
  index: number
  showMeta?: boolean
}

export function ProjectCard({ project, index, showMeta = true }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()
  const direction = index % 2 === 0 ? 'up' : 'down'

  return (
    <motion.article
      className="project-card"
      whileHover={reduceMotion ? undefined : 'hover'}
      initial="rest"
      animate="rest"
    >
      <Link className="project-card__link" to={`/work/${project.slug}`}>
        <div className="project-card__copy">
          <Reveal className="project-card__title-wrap">
            <h2 className="project-card__title">
              {project.titleLines.map((line) => (
                <motion.span
                  key={line}
                  variants={{ rest: { x: 0 }, hover: { x: 12 } }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="project-card__summary-wrap">
            <p className="project-card__summary">{project.summary}</p>
          </Reveal>

          {showMeta ? (
            <motion.div
              className="project-card__meta"
              variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.3 }}
            >
              <span>{project.category}</span>
              <span>{project.year}</span>
            </motion.div>
          ) : null}
        </div>

        <motion.div
          className="project-card__media"
          variants={{ rest: { scale: 1 }, hover: { scale: 1.015 } }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ParallaxImage
            src={project.cover}
            alt={project.coverAlt}
            amount={34}
            direction={direction}
            reveal
          />
          <motion.span
            className="project-card__view"
            variants={{ rest: { opacity: 0, y: 8 }, hover: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.3 }}
          >
            View case study ↗
          </motion.span>
        </motion.div>
      </Link>
    </motion.article>
  )
}
