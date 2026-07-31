import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react'
import { createPortal } from 'react-dom'
import {
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { useNavigationFade } from '../context/NavigationFadeContext'
import { site } from '../data/site'
import { SMOOTH_EASE } from './Reveal'

const EXIT_EASE = [0.4, 0, 1, 1] as const

const menuItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Work',
    to: '/work',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
] as const

const MotionNavLink = motion(NavLink)

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLElement>(null)

  const reduceMotion = useReducedMotion()
  const navigate = useNavigate()
  const location = useLocation()

  const {
    isNavigationVisible,
    navigateWithFade,
  } = useNavigationFade()

  function isModifiedClick(event: MouseEvent<HTMLAnchorElement>) {
    return (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
  }

  /*
   * Desktop navigation:
   * keep the existing fade-out / route / fade-in behaviour.
   */
  function createDesktopNavigationHandler(destination: string) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      if (isModifiedClick(event)) {
        return
      }

      event.preventDefault()
      void navigateWithFade(destination)
    }
  }

  /*
   * Mobile navigation:
   * render the selected page behind the open menu,
   * then lower the menu to reveal it.
   */
  function createMobileNavigationHandler(destination: string) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      if (isModifiedClick(event)) {
        return
      }

      event.preventDefault()

      if (location.pathname !== destination) {
        navigate(destination)
      }

      window.requestAnimationFrame(() => {
        setIsMenuOpen(false)
      })
    }
  }

  function openMenu() {
    setIsMenuOpen(true)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  /*
   * Lock page scrolling, focus the Close button,
   * support Escape and keep keyboard focus inside the menu.
   */
  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus({
        preventScroll: true,
      })
    })

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusableElements =
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        )

      if (!focusableElements?.length) {
        return
      }

      const elements = Array.from(focusableElements)
      const firstElement = elements[0]
      const lastElement = elements[elements.length - 1]

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault()
        lastElement.focus()
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.removeEventListener('keydown', handleKeyDown)

      document.body.style.overflow = previousOverflow

      menuButtonRef.current?.focus({
        preventScroll: true,
      })
    }
  }, [isMenuOpen])

  /*
   * Prevent the mobile overlay remaining open
   * when resizing back to desktop.
   */
  useEffect(() => {
    const desktopQuery = window.matchMedia(
      '(min-width: 768px)',
    )

    function handleViewportChange() {
      if (desktopQuery.matches) {
        setIsMenuOpen(false)
      }
    }

    desktopQuery.addEventListener(
      'change',
      handleViewportChange,
    )

    return () => {
      desktopQuery.removeEventListener(
        'change',
        handleViewportChange,
      )
    }
  }, [])

  const menuListVariants = {
    hidden: {
      transition: {
        staggerChildren: 0.025,
        staggerDirection: -1,
      },
    },

    visible: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.32,
        staggerChildren: reduceMotion ? 0 : 0.075,
      },
    },
  }

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
      transition: {
        duration: reduceMotion ? 0.1 : 0.2,
      },
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween' as const,
        duration: reduceMotion ? 0.15 : 0.75,
        ease: SMOOTH_EASE,
      },
    },
  }

  return (
    <>
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
            onClick={createDesktopNavigationHandler('/')}
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
              onClick={createDesktopNavigationHandler('/work')}
            >
              Work
            </NavLink>

            <NavLink
              to="/about"
              onClick={createDesktopNavigationHandler('/about')}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={createDesktopNavigationHandler('/contact')}
            >
              Contact
            </NavLink>
          </nav>

          <button
            ref={menuButtonRef}
            className="site-header__menu-toggle"
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label="Open navigation menu"
            onClick={openMenu}
          >
            Menu
          </button>
        </motion.div>
      </header>

      {typeof document !== 'undefined'
        ? createPortal(
            <AnimatePresence>
              {isMenuOpen ? (
                <motion.aside
                  ref={menuRef}
                  id="mobile-navigation"
                  key="mobile-navigation"
                  className="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Navigation menu"
                  initial={
                    reduceMotion
                      ? {
                          opacity: 0,
                        }
                      : {
                          y: '100%',
                        }
                  }
                  animate={
                    reduceMotion
                      ? {
                          opacity: 1,
                        }
                      : {
                          y: 0,
                        }
                  }
                  exit={
                    reduceMotion
                      ? {
                          opacity: 0,
                        }
                      : {
                          y: '100%',
                        }
                  }
                  transition={{
                    type: 'tween',
                    duration: reduceMotion ? 0.15 : 0.9,
                    ease: SMOOTH_EASE,
                  }}
                >
                  <motion.div
                    className="mobile-menu__top"
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : -12,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0.15 : 0.65,
                      delay: reduceMotion ? 0 : 0.3,
                      ease: SMOOTH_EASE,
                    }}
                  >
                    <NavLink
                      to="/"
                      aria-label="Jugin Muzhaqi, homepage"
                      onClick={createMobileNavigationHandler('/')}
                    >
                      {site.name}
                    </NavLink>

                    <button
                      ref={closeButtonRef}
                      type="button"
                      aria-label="Close navigation menu"
                      onClick={closeMenu}
                    >
                      Close
                    </button>
                  </motion.div>

                  <motion.nav
                    className="mobile-menu__nav"
                    aria-label="Mobile navigation"
                    variants={menuListVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {menuItems.map((item) => (
                      <MotionNavLink
                        className="mobile-menu__link"
                        key={item.to}
                        to={item.to}
                        end={item.to === '/'}
                        variants={menuItemVariants}
                        onClick={createMobileNavigationHandler(
                          item.to,
                        )}
                      >
                        {item.label}
                      </MotionNavLink>
                    ))}
                  </motion.nav>

                  <motion.p
                    className="mobile-menu__location"
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 18,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: reduceMotion ? 0.15 : 0.7,
                      delay: reduceMotion ? 0 : 0.58,
                      ease: SMOOTH_EASE,
                    }}
                  >
                    <span>{site.location[0]}</span>
                    <span>{site.location[1]}</span>
                  </motion.p>
                </motion.aside>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  )
}