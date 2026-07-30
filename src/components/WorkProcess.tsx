import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Reveal } from './Reveal'
import { SectionMeta } from './SectionMeta'

const processItems = [
  {
    code: 'B1',
    title: 'Design',
    text: 'I begin by clarifying the content, hierarchy and purpose of each screen before styling individual elements.',
  },
  {
    code: 'B2',
    title: 'Code',
    text: 'I translate the visual direction into reusable, semantic components with straightforward structure and readable CSS.',
  },
  {
    code: 'B3',
    title: 'Testing',
    text: 'I test interactions, keyboard navigation, content states and layouts early so problems are found before the final polish.',
  },
  {
    code: 'B4',
    title: 'Responsive layouts',
    text: 'I build with responsiveness in mind from the start, making sure content adapts clearly across devices without losing personality or usability.',
  },
]

export function WorkProcess() {
  const [active, setActive] = useState(3)
  const reduceMotion = useReducedMotion()

  return (
    <section className="process-section section-pad">
      <SectionMeta label="B -" center="How I work" />
      <Reveal className="process-list">
        {processItems.map((item, index) => {
          const isActive = active === index
          const panelId = `process-panel-${item.code}`

          return (
            <article className={`process-item ${isActive ? 'is-active' : ''}`} key={item.code}>
              <button
                className="process-item__button"
                type="button"
                aria-expanded={isActive}
                aria-controls={panelId}
                onClick={() => setActive(index)}
              >
                <span>{item.code} -</span>
                <strong>{item.title}</strong>
                <span aria-hidden="true">{isActive ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.div
                    id={panelId}
                    className="process-item__panel"
                    initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    animate={reduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0.1 : 0.35 }}
                  >
                    <p>{item.text}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          )
        })}
      </Reveal>
    </section>
  )
}
