import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'

type PageMetaOptions = {
  title: string
  description: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

function updateMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
): void {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function updateCanonical(url: string): void {
  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }

  canonical.href = url
}

export function usePageMeta({
  title,
  description,
  image = 'images/editorial/hero-portrait.png',
  type = 'website',
  noIndex = false,
}: PageMetaOptions): void {
  const { pathname } = useLocation()

  useEffect(() => {
    const canonicalUrl = `${site.url}${pathname === '/' ? '/' : pathname}`

    const imageUrl = image.startsWith('http')
      ? image
      : `${site.url}/${image.replace(/^\/+/, '')}`

    document.title = title

    updateMeta('name', 'description', description)
    updateMeta(
      'name',
      'robots',
      noIndex ? 'noindex, nofollow' : 'index, follow',
    )

    updateCanonical(canonicalUrl)

    updateMeta('property', 'og:title', title)
    updateMeta('property', 'og:description', description)
    updateMeta('property', 'og:type', type)
    updateMeta('property', 'og:url', canonicalUrl)
    updateMeta('property', 'og:image', imageUrl)
    updateMeta('property', 'og:site_name', site.name)
    updateMeta('property', 'og:locale', 'en_GB')

    updateMeta('name', 'twitter:card', 'summary_large_image')
    updateMeta('name', 'twitter:title', title)
    updateMeta('name', 'twitter:description', description)
    updateMeta('name', 'twitter:image', imageUrl)
  }, [description, image, noIndex, pathname, title, type])
}