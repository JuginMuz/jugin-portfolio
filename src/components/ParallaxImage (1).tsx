import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

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
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start end', 'end start'],
  })
  const signedAmount = direction === 'up' ? amount : -amount
  const y = useTransform(scrollYProgress, [0, 1], [signedAmount, -signedAmount])

  return (
    <motion.div
      ref={target}
      className={`parallax-image ${className}`.trim()}
      style={{ y: reduceMotion ? 0 : y }}
      initial={reveal && !reduceMotion ? { clipPath: 'inset(0 0 100% 0)' } : undefined}
      whileInView={reveal ? { clipPath: 'inset(0 0 0% 0)' } : undefined}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, delay: 0.12, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        initial={reveal && !reduceMotion ? { scale: 1.08 } : undefined}
        whileInView={reveal ? { scale: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  )
}
