import { motion, useReducedMotion } from 'framer-motion'
import {
  getRevealOffset,
  type RevealDirection,
} from './Reveal'

type SectionMetaProps = {
  label: string
  center?: string
  right?: string
  className?: string

  reveal?: boolean
  direction?: RevealDirection
  delay?: number
  distance?: number
  duration?: number
  amount?: number
  once?: boolean
}

export function SectionMeta({
  label,
  center,
  right,
  className = '',
  reveal = false,
  direction = 'bottom',
  delay = 0,
  distance = 36,
  duration = 0.8,
  amount = 0.2,
  once = true,
}: SectionMetaProps) {
  const reduceMotion = useReducedMotion()

  const offset = reduceMotion
    ? {}
    : getRevealOffset(direction, distance)

  return (
    <motion.div
      className={`section-meta ${className}`.trim()}
      initial={
        reveal
          ? {
              opacity: 0,
              ...offset,
            }
          : undefined
      }
      whileInView={
        reveal
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : undefined
      }
      viewport={
        reveal
          ? {
              once,
              amount,
            }
          : undefined
      }
      transition={
        reveal
          ? {
              duration: reduceMotion ? 0.15 : duration,
              delay,
              ease: [0.22, 1, 0.36, 1],
            }
          : undefined
      }
    >
      <p>{label}</p>

      {center ? (
        <p>{center}</p>
      ) : (
        <span aria-hidden="true" />
      )}

      {right ? (
        <p>{right}</p>
      ) : (
        <span aria-hidden="true" />
      )}
    </motion.div>
  )
}