import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import type { ReactNode } from 'react'
import appCss from '~/styles/globals.css?url'

const SITE_URL = 'https://formation-claude-avocats.fr'
const SITE_TITLE = 'Formation Claude pour Avocats | IA pour cabinets d\'avocats'
const SITE_DESCRIPTION =
  'Formation intra-cabinet à Claude pour les avocats. 4 heures, présentiel, conforme secret professionnel et AI Act. Maîtrisez l\'IA générative dans votre pratique juridique.'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Formation Claude pour Avocats',
  description: SITE_DESCRIPTION,
  provider: {
    '@type': 'Organization',
    name: 'Formation Claude Avocats',
    url: SITE_URL,
  },
  courseMode: 'onsite',
  isAccessibleForFree: false,
  inLanguage: 'fr',
  audience: {
    '@type': 'Audience',
    audienceType: 'Avocats et professionnels du droit',
  },
  teaches: [
    'Utilisation de Claude pour la pratique juridique',
    'Conformité AI Act',
    'Secret professionnel et IA',
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: SITE_TITLE },
      { name: 'description', content: SITE_DESCRIPTION },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Formation Claude Avocats' },
      { name: 'keywords', content: 'formation claude, avocats, IA juridique, intelligence artificielle, cabinet avocat, AI Act, secret professionnel, CNB, formation professionnelle' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:title', content: SITE_TITLE },
      { property: 'og:description', content: SITE_DESCRIPTION },
      { property: 'og:image', content: `${SITE_URL}/og-image.png` },
      { property: 'og:locale', content: 'fr_FR' },
      { property: 'og:site_name', content: 'Formation Claude Avocats' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: SITE_URL },
      { name: 'twitter:title', content: SITE_TITLE },
      { name: 'twitter:description', content: SITE_DESCRIPTION },
      { name: 'twitter:image', content: `${SITE_URL}/og-image.png` },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: SITE_URL },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Outfit:wght@400;500&display=swap',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <div id="app">{children}</div>
        <ScrollRestoration />
        <Scripts />
        <script src="/scripts/animations.js" defer />
      </body>
    </html>
  )
}
