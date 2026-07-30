import { motion, useReducedMotion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { site } from '../data/site'

const MotionNavLink = motion(NavLink)

export function SiteHeader() {
  const reduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.12,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.15 : 0.85,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  return (
    <header className="site-header">
      <motion.div
        className="site-header__inner"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionNavLink
          className="site-header__name"
          to="/"
          aria-label="Jugin Muzhaqi, homepage"
          variants={itemVariants}
        >
          {site.name}
        </MotionNavLink>

        <motion.nav
          className="site-header__nav"
          aria-label="Primary navigation"
          variants={itemVariants}
        >
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </motion.nav>
      </motion.div>
    </header>
  )
}