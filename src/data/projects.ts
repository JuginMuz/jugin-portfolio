import { assetPath } from '../utils/assetPath'

export type Project = {
  slug: string
  title: string
  titleLines: string[]
  category: string
  year: string
  summary: string
  introduction: string
  stack: string[]
  cover: string
  coverAlt: string
  gallery: Array<{
    src: string
    alt: string
    direction: 'up' | 'down'
  }>
  learning: string[]
  externalUrl: string
  externalLabel: string
  repositoryUrl: string
}

export const projects: Project[] = [
  {
    slug: 'nexttask',
    title: 'NextTask',
    titleLines: ['Next', 'Task'],
    category: 'Web development',
    year: '2026',
    summary:
      'Accessibility-first productivity app designed to support focus, task management and executive-function challenges.',
    introduction:
      'A final-year project exploring how accessible design, structured planning and web technologies can support users who need clearer, calmer productivity tools.',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
    ],
    cover: assetPath('images/projects/nexttask/cover.png'),
    coverAlt: 'NextTask accessibility settings screen',
    gallery: [
      {
        src: assetPath('images/projects/nexttask/dashboard.png'),
        alt: 'NextTask dashboard interface',
        direction: 'up',
      },
      {
        src: assetPath('images/projects/nexttask/home.png'),
        alt: 'NextTask home interface',
        direction: 'up',
      },
      {
        src: assetPath('images/projects/nexttask/task-list.png'),
        alt: 'NextTask project and task list',
        direction: 'down',
      },
      {
        src: assetPath('images/projects/nexttask/focus-session.png'),
        alt: 'NextTask focus session timer',
        direction: 'up',
      },
      {
        src: assetPath('images/projects/nexttask/settings.png'),
        alt: 'NextTask accessibility settings',
        direction: 'down',
      },
    ],
    learning: [
      'This project helped me understand that accessibility should shape a digital product from the beginning rather than being added at the end.',
      'I improved my ability to plan a larger application, structure technical decisions and turn user needs into clear, focused interface patterns.',
    ],
    externalUrl: 'https://github.com/JuginMuz/NextTask',
    externalLabel: 'View repository',
    repositoryUrl: 'https://github.com/JuginMuz/NextTask',
  },
  {
    slug: 'roma-mia',
    title: 'Roma Mia',
    titleLines: ['Roma', 'Mia'],
    category: 'Web design',
    year: '2025',
    summary:
      'Responsive restaurant website focused on layout, navigation, menu presentation and reservations.',
    introduction:
      'A university web design project focused on structure, responsive layouts, restaurant branding, menu presentation and an online reservation flow.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    cover: assetPath('images/projects/roma-mia/cover.png'),
    coverAlt: 'Roma Mia restaurant homepage',
    gallery: [
      {
        src: assetPath('images/projects/roma-mia/dashboard.png'),
        alt: 'Roma Mia dashboard interface',
        direction: 'up',
      },
      {
        src: assetPath('images/projects/roma-mia/menu.png'),
        alt: 'Roma Mia menu page',
        direction: 'up',
      },
      {
        src: assetPath('images/projects/roma-mia/booking.png'),
        alt: 'Roma Mia reservation page',
        direction: 'down',
      },
      {
        src: assetPath('images/projects/roma-mia/mobile-hero.png'),
        alt: 'Roma Mia mobile homepage',
        direction: 'up',
      },
    ],
    learning: [
      'This project strengthened my understanding of multi-page website structure, responsive design and clear navigation.',
      'I also practised organising content around a realistic business use case so visitors could understand the restaurant, browse the menu and reach the booking flow quickly.',
    ],
    externalUrl: 'https://juginmuz.github.io/Roma-Mia/',
    externalLabel: 'Visit site',
    repositoryUrl: 'https://github.com/JuginMuz/Roma-Mia',
  },
  {
    slug: 'peerly',
    title: 'Peerly',
    titleLines: ['Peerly'],
    category: 'Full-stack collaboration',
    year: '2025',
    summary:
      'Student collaboration platform combining social-media and forum features for university students.',
    introduction:
      'A team project focused on student collaboration, academic discussions, resource sharing and full-stack web development.',
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Pug',
      'Node.js',
      'Express',
      'MySQL',
      'Docker',
    ],
    cover: assetPath('images/projects/peerly/cover.png'),
    coverAlt: 'Peerly student collaboration platform',
    gallery: [
      {
        src: assetPath('images/projects/peerly/dashboard.png'),
        alt: 'Peerly dashboard interface',
        direction: 'up',
      },
      {
        src: assetPath('images/projects/peerly/login.png'),
        alt: 'Peerly login page',
        direction: 'up',
      },
      {
        src: assetPath('images/projects/peerly/feed.png'),
        alt: 'Peerly activity feed',
        direction: 'down',
      },
      {
        src: assetPath('images/projects/peerly/profile.png'),
        alt: 'Peerly student profile',
        direction: 'up',
      },
    ],
    learning: [
      'Peerly gave me experience working in a larger shared codebase and understanding how front-end, back-end and database layers connect.',
      'I learned more about version control, team organisation and delivering features inside a collaborative development workflow.',
    ],
    externalUrl: 'https://github.com/JuginMuz/Peerly',
    externalLabel: 'View repository',
    repositoryUrl: 'https://github.com/JuginMuz/Peerly',
  },
  {
    slug: 'movietomovies',
    title: 'MovietoMovies',
    titleLines: ['Movieto', 'Movies'],
    category: 'Front-end development',
    year: '2023',
    summary:
      'React movie-search app using the OMDb API to fetch and display dynamic film results.',
    introduction:
      'A front-end project focused on API requests, search functionality, React state management and responsive result cards.',
    stack: ['React', 'JavaScript', 'HTML', 'CSS', 'OMDb API'],
    cover: assetPath('images/projects/movietomovies/cover.png'),
    coverAlt: 'MovietoMovies search interface',
    gallery: [
      {
        src: assetPath('images/projects/movietomovies/dashboard.png'),
        alt: 'MovietoMovies dashboard interface',
        direction: 'up',
      },
      {
        src: assetPath(
          'images/projects/movietomovies/results-desktop.png',
        ),
        alt: 'MovietoMovies desktop search results',
        direction: 'up',
      },
      {
        src: assetPath(
          'images/projects/movietomovies/card-closeup.png',
        ),
        alt: 'MovietoMovies result card close-up',
        direction: 'down',
      },
      {
        src: assetPath(
          'images/projects/movietomovies/results-mobile.png',
        ),
        alt: 'MovietoMovies mobile search results',
        direction: 'up',
      },
    ],
    learning: [
      'This project improved my understanding of API requests, React hooks and dynamic rendering.',
      'I also learned to manage search input, present external data clearly and design result cards that adapt across screen sizes.',
    ],
    externalUrl:
      'https://juginmuz.github.io/Movietomovies-API/',
    externalLabel: 'Visit site',
    repositoryUrl:
      'https://github.com/JuginMuz/Movietomovies-API',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}