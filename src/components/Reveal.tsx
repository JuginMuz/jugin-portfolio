import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export type RevealDirection =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'fade'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  distance?: number
  duration?: number
  direction?: RevealDirection
  amount?: number
  once?: boolean
}>

export function getRevealOffset(
  direction: RevealDirection,
  distance: number,
) {
  switch (direction) {
    case 'top':
      return { y: -distance }

    case 'bottom':
      return { y: distance }

    case 'left':
      return { x: -distance }

    case 'right':
      return { x: distance }

    case 'fade':
    default:
      return {}
  }
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  distance = 40,
  duration = 0.8,
  direction = 'bottom',
  amount = 0.2,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  const offset = reduceMotion
    ? {}
    : getRevealOffset(direction, distance)

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...offset,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration: reduceMotion ? 0.15 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}