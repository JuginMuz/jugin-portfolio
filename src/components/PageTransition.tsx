import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type PageTransitionProps = PropsWithChildren<{
  className?: string
}>

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.main
      className={`page ${className}`.trim()}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
      transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  )
}
