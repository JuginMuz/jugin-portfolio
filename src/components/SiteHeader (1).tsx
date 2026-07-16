import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { site } from '../data/site'

export function SiteHeader() {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <NavLink className="site-header__name" to="/" aria-label="Jugin Muzhaqi, homepage">
        {site.name}
      </NavLink>

      <p className="site-header__location">
        <span>{site.location[0]}</span>
        <span>{site.location[1]}</span>
      </p>

      <nav className="site-header__nav" aria-label="Primary navigation">
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </motion.header>
  )
}
