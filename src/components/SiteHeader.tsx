import { motion, useReducedMotion } from 'framer-motion'
import type { MouseEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigationFade } from '../context/NavigationFadeContext'
import { site } from '../data/site'
import { SMOOTH_EASE } from './Reveal'

const EXIT_EASE = [0.4, 0, 1, 1] as const

export function SiteHeader() {
  const reduceMotion = useReducedMotion()

  const {
    isNavigationVisible,
    navigateWithFade,
  } = useNavigationFade()

  function createNavigationHandler(destination: string) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      // Preserve Ctrl/Cmd-click, middle-click and opening in a new tab.
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      event.preventDefault()
      void navigateWithFade(destination)
    }
  }

  return (
    <header className="site-header">
      <motion.div
        className="site-header__inner"
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : -24,
        }}
        animate={
          isNavigationVisible
            ? {
                opacity: 1,
                y: 0,
              }
            : {
                opacity: 0,
                y: reduceMotion ? 0 : -12,
              }
        }
        transition={{
          type: 'tween',
          duration: reduceMotion
            ? 0.15
            : isNavigationVisible
              ? 0.85
              : 0.35,
          ease: isNavigationVisible
            ? SMOOTH_EASE
            : EXIT_EASE,
        }}
      >
        <NavLink
          className="site-header__name"
          to="/"
          aria-label="Jugin Muzhaqi, homepage"
          onClick={createNavigationHandler('/')}
        >
          {site.name}
        </NavLink>

        <p className="site-header__location">
          <span>{site.location[0]}</span>
          <span>{site.location[1]}</span>
        </p>

        <nav
          className="site-header__nav"
          aria-label="Primary navigation"
        >
          <NavLink
            to="/work"
            onClick={createNavigationHandler('/work')}
          >
            Work
          </NavLink>

          <NavLink
            to="/about"
            onClick={createNavigationHandler('/about')}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={createNavigationHandler('/contact')}
          >
            Contact
          </NavLink>
        </nav>
      </motion.div>
    </header>
  )
}