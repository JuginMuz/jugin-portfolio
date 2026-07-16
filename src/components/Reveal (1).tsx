import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  distance?: number
  once?: boolean
}>

export function Reveal({
  children,
  className = '',
  delay = 0,
  distance = 30,
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
