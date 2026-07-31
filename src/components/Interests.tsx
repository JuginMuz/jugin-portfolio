import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useState } from 'react'
import { SMOOTH_EASE } from './Reveal'
import { SectionMeta } from './SectionMeta'
import { assetPath } from '../utils/assetPath'

const interests = [
  {
    title: 'Gaming',
    eyebrow: 'PlayStation',
    text: 'I love challenging games, especially the Dark Souls series, because they reward patience, focus and learning from mistakes.',
    image: assetPath('images/editorial/dark-souls.jpg'),
    alt: 'A game controller lit in blue',
    className: 'interest-image--photo',
  },
  {
    title: 'Football',
    eyebrow: 'Teamwork',
    text: 'Football was a big part of growing up. I still love playing, and I especially enjoyed the time I spent coaching children in my small hometown.',
    image: assetPath('images/editorial/milan.jpg'),
    alt: 'Abstract football illustration',
    className: 'interest-image--graphic',
  },
  {
    title: 'Fitness',
    eyebrow: 'Progress',
    text: 'Training is about improving a little at a time, staying in shape and protecting the positive mental-health feeling that comes from consistency.',
    image: assetPath('images/editorial/gym.webp'),
    alt: 'Abstract fitness illustration',
    className: 'interest-image--graphic',
  },
]

export function Interests() {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const selected = interests[active]

  const tabsVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.12,
        staggerChildren: 0.12,
      },
    },
  }

  const tabVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: 'tween' as const,
        duration: reduceMotion ? 0.2 : 1.15,
        ease: SMOOTH_EASE,
      },
    },
  }

  return (
    <section className="interests-section section-pad">
      <SectionMeta
        label="C -"
        center="Personal interests"
        right="Send me a message"
      />

      <motion.div
        className="interests-tabs"
        variants={tabsVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.35,
          margin: '0px 0px -8% 0px',
        }}
      >
        {interests.map((interest, index) => (
          <motion.button
            className={active === index ? 'is-active' : ''}
            type="button"
            key={interest.title}
            onClick={() => setActive(index)}
            aria-pressed={active === index}
            variants={tabVariants}
          >
            {interest.title}
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          className="interest-panel"
          key={selected.title}
          initial={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  y: -18,
                }
          }
          transition={{
            type: 'tween',
            duration: reduceMotion ? 0.2 : 0.7,
            ease: SMOOTH_EASE,
          }}
        >
          <div className="interest-panel__copy">
            <p className="interest-panel__eyebrow">
              {selected.eyebrow}
            </p>

            <p>{selected.text}</p>
          </div>

          <div
            className={`interest-panel__image ${selected.className}`}
          >
            <img
              src={selected.image}
              alt={selected.alt}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}