import type { RouteObject } from 'react-router'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { BotoxServicePage } from './pages/BotoxServicePage'
import { FillerServicePage } from './pages/FillerServicePage'
import { BodyContouringServicePage } from './pages/BodyContouringServicePage'
import { MedicalWeightManagementPage } from './pages/MedicalWeightManagementPage'
import { ResultsPage } from './pages/ResultsPage'
import { AboutPage } from './pages/AboutPage'
import { MembershipsPage } from './pages/MembershipsPage'
import { BookPage } from './pages/BookPage'
import { FAQPage } from './pages/FAQPage'
import { NotFoundPage } from './pages/NotFoundPage'

export const routeConfig: RouteObject[] = [
  { path: '/', Component: HomePage },
  { path: '/services', Component: ServicesPage },
  { path: '/services/botox', Component: BotoxServicePage },
  { path: '/services/filler', Component: FillerServicePage },
  { path: '/services/body-contouring', Component: BodyContouringServicePage },
  { path: '/services/medical-weight-management', Component: MedicalWeightManagementPage },
  { path: '/services/glp1', Component: MedicalWeightManagementPage },
  { path: '/results', Component: ResultsPage },
  { path: '/about', Component: AboutPage },
  { path: '/memberships', Component: MembershipsPage },
  { path: '/book', Component: BookPage },
  { path: '/faq', Component: FAQPage },
  // Catch-all for unknown paths — renders the branded 404 (noindex).
  { path: '*', Component: NotFoundPage },
]
