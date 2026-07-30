import {
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useNavigationFade } from '../context/NavigationFadeContext'
import { site } from '../data/site'
import { SMOOTH_EASE } from './Reveal'

const EXIT_EASE = [0.4, 0, 1, 1] as const

type PageLocationProps = {
  rowClassName: string
  textClassName?: string
  compact?: boolean
}

export function PageLocation({
  rowClassName,
  textClassName = '',
  compact = false,
}: PageLocationProps) {
  const reduceMotion = useReducedMotion()

  const { isNavigationVisible } =
    useNavigationFade()

  const animation = isNavigationVisible
    ? {
        opacity: 1,
        y: 0,
      }
    : {
        opacity: 0,
        y: reduceMotion ? 0 : -10,
      }

  const transition = {
    type: 'tween' as const,
    duration: reduceMotion
      ? 0.15
      : isNavigationVisible
        ? 0.7
        : 0.32,
    ease: isNavigationVisible
      ? SMOOTH_EASE
      : EXIT_EASE,
  }

  if (compact) {
    return (
      <motion.p
        className={rowClassName}
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : -20,
        }}
        animate={animation}
        transition={transition}
      >
        {site.location[0]}
        <span>{site.location[1]}</span>
      </motion.p>
    )
  }

  return (
    <motion.div
      className={rowClassName}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : -20,
      }}
      animate={animation}
      transition={transition}
    >
      <p className={textClassName}>
        <span>{site.location[0]}</span>
        <span>{site.location[1]}</span>
      </p>
    </motion.div>
  )
}