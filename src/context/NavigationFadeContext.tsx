import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

type NavigationFadeContextValue = {
  isNavigationVisible: boolean
  navigateWithFade: (destination: string) => Promise<void>
}

const NavigationFadeContext =
  createContext<NavigationFadeContextValue | null>(null)

function wait(duration: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, duration)
  })
}

export function NavigationFadeProvider({
  children,
}: PropsWithChildren) {
  const [isNavigationVisible, setIsNavigationVisible] =
    useState(true)

  const isTransitioning = useRef(false)

  const navigate = useNavigate()
  const location = useLocation()

  const navigateWithFade = useCallback(
    async (destination: string) => {
      if (isTransitioning.current) {
        return
      }

      isTransitioning.current = true

      // Fade out the header and location.
      setIsNavigationVisible(false)
      await wait(340)

      // This condition still allows the animation to play
      // when the current page's link is clicked.
      if (location.pathname !== destination) {
        navigate(destination)
      }

      // Give React a moment to render the destination.
      await wait(100)

      // Fade everything back in.
      setIsNavigationVisible(true)
      await wait(700)

      isTransitioning.current = false
    },
    [location.pathname, navigate],
  )

  return (
    <NavigationFadeContext.Provider
      value={{
        isNavigationVisible,
        navigateWithFade,
      }}
    >
      {children}
    </NavigationFadeContext.Provider>
  )
}

export function useNavigationFade() {
  const context = useContext(NavigationFadeContext)

  if (!context) {
    throw new Error(
      'useNavigationFade must be used inside NavigationFadeProvider',
    )
  }

  return context
}