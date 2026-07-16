import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'

const LOADER_DURATION = 1250

type LoaderProps = {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    document.body.classList.add('is-loading')

    const timer = window.setTimeout(onComplete, reduceMotion ? 250 : LOADER_DURATION)

    return () => {
      window.clearTimeout(timer)
      document.body.classList.remove('is-loading')
    }
  }, [onComplete, reduceMotion])

  return (
    <motion.div
      className="loader"
      role="status"
      aria-live="polite"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.1 : 0.45, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="loader__inner">
        <p className="loader__name">Jugin Muzhaqi</p>
        <div className="loader__track" aria-hidden="true">
          <motion.span
            className="loader__progress"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: reduceMotion ? 0.1 : 1,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        </div>
        <p className="loader__label">Portfolio / 2026</p>
      </div>
    </motion.div>
  )
}
