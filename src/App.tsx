import { AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Loader } from './components/Loader'
import { SiteHeader } from './components/SiteHeader'
import { useRouteScroll } from './hooks/useRouteScroll'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectPage } from './pages/ProjectPage'
import { WorkPage } from './pages/WorkPage'
import { NavigationFadeProvider } from './context/NavigationFadeContext'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const location = useLocation()
  const isProjectRoute = location.pathname.startsWith('/work/')

  useRouteScroll()

  // Starts the loader exit animation.
  const finishLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  // Mount the website only after the loader has completely disappeared.
  const showWebsite = useCallback(() => {
    setShowContent(true)
    document.body.classList.remove('is-loading')
  }, [])

  return (
  <NavigationFadeProvider>
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <AnimatePresence
        mode="wait"
        onExitComplete={showWebsite}
      >
        {isLoading ? (
          <Loader
            key="portfolio-loader"
            onComplete={finishLoading}
          />
        ) : null}
      </AnimatePresence>

      {showContent ? (
        <>
          {!isProjectRoute ? <SiteHeader /> : null}

          <div id="main-content" tabIndex={-1}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route
                  path="/work/:slug"
                  element={<ProjectPage />}
                />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="/contact"
                  element={<ContactPage />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AnimatePresence>
          </div>
        </>
      ) : null}
    </>
  </NavigationFadeProvider>
)
}

export default App