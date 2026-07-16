import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Reveal } from './Reveal'
import { SectionMeta } from './SectionMeta'

const interests = [
  {
    title: 'Gaming',
    eyebrow: 'PlayStation',
    text: 'I love challenging games, especially the Dark Souls series, because they reward patience, focus and learning from mistakes.',
    image: '/images/editorial/gaming-controller.png',
    alt: 'A game controller lit in blue',
    className: 'interest-image--photo',
  },
  {
    title: 'Football',
    eyebrow: 'Teamwork',
    text: 'Football was a big part of growing up. I still love playing, and I especially enjoyed the time I spent coaching children in my small hometown.',
    image: '/images/placeholders/football.svg',
    alt: 'Abstract football illustration',
    className: 'interest-image--graphic',
  },
  {
    title: 'Fitness',
    eyebrow: 'Progress',
    text: 'Training is about improving a little at a time, staying in shape and protecting the positive mental-health feeling that comes from consistency.',
    image: '/images/placeholders/fitness.svg',
    alt: 'Abstract fitness illustration',
    className: 'interest-image--graphic',
  },
]

export function Interests() {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const selected = interests[active]

  return (
    <section className="interests-section section-pad">
      <SectionMeta label="D -" center="Personal interests" right="Send me a message" />

      <Reveal className="interests-tabs" distance={18}>
        {interests.map((interest, index) => (
          <button
            className={active === index ? 'is-active' : ''}
            type="button"
            key={interest.title}
            onClick={() => setActive(index)}
          >
            {interest.title}
          </button>
        ))}
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          className="interest-panel"
          key={selected.title}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
          transition={{ duration: reduceMotion ? 0.12 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="interest-panel__copy">
            <p className="interest-panel__eyebrow">{selected.eyebrow}</p>
            <p>{selected.text}</p>
          </div>
          <div className={`interest-panel__image ${selected.className}`}>
            <img src={selected.image} alt={selected.alt} />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
