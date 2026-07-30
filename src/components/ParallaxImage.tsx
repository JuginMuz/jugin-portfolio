import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { SMOOTH_EASE } from './Reveal'

type ParallaxImageProps = {
  src: string
  alt: string
  className?: string
  amount?: number
  direction?: 'up' | 'down'
  reveal?: boolean
  loading?: 'eager' | 'lazy'
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  amount = 46,
  direction = 'up',
  reveal = false,
  loading = 'lazy',
}: ParallaxImageProps) {
  const target = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const isInView = useInView(target, {
    once: true,
    amount: 0.08,
    margin: '0px 0px -5% 0px',
  })

  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
  })

  const signedAmount = direction === 'up' ? amount : -amount

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [signedAmount, -signedAmount],
  )

  const isVisible = !reveal || isInView || reduceMotion

  return (
    <motion.div
      ref={target}
      className={`parallax-image ${className}`.trim()}
      style={{
        y: reduceMotion ? 0 : y,
      }}
    >
      <motion.div
        className="parallax-image__mask"
        initial={
          reveal && !reduceMotion
            ? {
                opacity: 0,
                clipPath: 'inset(0% 0% 100% 0%)',
              }
            : {
                opacity: 1,
                clipPath: 'inset(0% 0% 0% 0%)',
              }
        }
        animate={{
          opacity: isVisible ? 1 : 0,
          clipPath: isVisible
            ? 'inset(0% 0% 0% 0%)'
            : 'inset(0% 0% 100% 0%)',
        }}
        transition={{
          type: 'tween',
          duration: reduceMotion ? 0.2 : 1.35,
          ease: SMOOTH_EASE,
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading={loading}
          initial={
            reveal && !reduceMotion
              ? {
                  opacity: 0,
                  scale: 1.07,
                }
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 1.07,
          }}
          transition={{
            type: 'tween',
            duration: reduceMotion ? 0.2 : 1.5,
            ease: SMOOTH_EASE,
          }}
        />
      </motion.div>
    </motion.div>
  )
}