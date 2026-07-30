import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export type RevealDirection =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'fade'

export const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const

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
      return { x: 0, y: -distance }

    case 'bottom':
      return { x: 0, y: distance }

    case 'left':
      return { x: -distance, y: 0 }

    case 'right':
      return { x: distance, y: 0 }

    case 'fade':
    default:
      return { x: 0, y: 0 }
  }
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  distance = 48,
  duration = 1.15,
  direction = 'bottom',
  amount = 0.16,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const offset = getRevealOffset(direction, distance)

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: reduceMotion ? 0 : offset.x,
        y: reduceMotion ? 0 : offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once,
        amount,
        margin: '0px 0px -8% 0px',
      }}
      transition={{
        type: 'tween',
        duration: reduceMotion ? 0.2 : duration,
        delay,
        ease: SMOOTH_EASE,
      }}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  )
}