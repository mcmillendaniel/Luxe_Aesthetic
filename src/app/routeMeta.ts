// Per-route metadata used at prerender time to inject a unique <title>,
// meta description, canonical URL, and Open Graph tags for each page.
//
// This is the single source of truth for which routes get prerendered
// (scripts/prerender.js derives its route list from the keys here) and for
// the SEO metadata each one ships. Keep it in sync with routeConfig.tsx.

export interface RouteMeta {
  /** URL path, always starting with "/". */
  path: string
  /** Unique <title> for the route. */
  title: string
  /** Unique meta description for the route. */
  description: string
  /**
   * Optional canonical path override. Used for alias routes that should point
   * search engines at their primary URL (e.g. /services/glp1 -> the medical
   * weight management page). Defaults to `path` when omitted.
   */
  canonical?: string
  /** When true, emit a robots "noindex" tag for the route. */
  noindex?: boolean
}

export const routeMeta: Record<string, RouteMeta> = {
  '/': {
    path: '/',
    title: 'Luxe Aesthetic | Med Spa in Raleigh, NC',
    description:
      'Botox, dermal filler, body contouring, and medical weight management at Luxe Aesthetic in Raleigh, NC. 500+ five-star reviews. Book your consultation today.',
  },
  '/about': {
    path: '/about',
    title: 'About Us | Luxe Aesthetic, Raleigh NC',
    description:
      'Meet the team behind Luxe Aesthetic, a Raleigh, NC med spa focused on natural-looking results, expert injectors, and personalized aesthetic care.',
  },
  '/services': {
    path: '/services',
    title: 'Aesthetic Services | Luxe Aesthetic, Raleigh NC',
    description:
      "Explore Luxe Aesthetic's med spa services in Raleigh, NC — Botox, dermal filler, body contouring, and physician-guided medical weight management.",
  },
  '/services/botox': {
    path: '/services/botox',
    title: 'Botox in Raleigh, NC | Luxe Aesthetic',
    description:
      'Smooth fine lines and wrinkles with expert Botox treatments at Luxe Aesthetic in Raleigh, NC. Natural-looking results from experienced injectors.',
  },
  '/services/filler': {
    path: '/services/filler',
    title: 'Dermal Filler in Raleigh, NC | Luxe Aesthetic',
    description:
      'Restore volume and enhance your features with dermal filler at Luxe Aesthetic in Raleigh, NC. Personalized treatments for subtle, natural-looking results.',
  },
  '/services/body-contouring': {
    path: '/services/body-contouring',
    title: 'Body Contouring in Raleigh, NC | Luxe Aesthetic',
    description:
      'Non-surgical body contouring at Luxe Aesthetic in Raleigh, NC. Target stubborn fat and sculpt your silhouette with advanced, no-downtime treatments.',
  },
  '/services/medical-weight-management': {
    path: '/services/medical-weight-management',
    title: 'Medical Weight Management | Luxe Aesthetic, Raleigh NC',
    description:
      'Physician-guided medical weight management at Luxe Aesthetic in Raleigh, NC, including GLP-1 programs tailored to help you reach your goals safely.',
  },
  '/services/glp1': {
    path: '/services/glp1',
    title: 'GLP-1 Weight Loss Programs | Luxe Aesthetic, Raleigh NC',
    description:
      'GLP-1 weight loss programs at Luxe Aesthetic in Raleigh, NC. Physician-supervised care to help you lose weight and keep it off. Book a consultation.',
    // Alias of the medical weight management page — consolidate SEO signals there.
    canonical: '/services/medical-weight-management',
  },
  '/results': {
    path: '/results',
    title: 'Real Patient Results | Luxe Aesthetic, Raleigh NC',
    description:
      'See real before-and-after results from Botox, filler, and body contouring patients at Luxe Aesthetic in Raleigh, NC. Natural-looking transformations.',
  },
  '/memberships': {
    path: '/memberships',
    title: 'Memberships & Rewards | Luxe Aesthetic, Raleigh NC',
    description:
      'Save on your favorite treatments with a Luxe Aesthetic membership in Raleigh, NC. Exclusive member pricing, perks, and rewards throughout the year.',
  },
  '/book': {
    path: '/book',
    title: 'Book a Consultation | Luxe Aesthetic, Raleigh NC',
    description:
      'Book your appointment or free consultation at Luxe Aesthetic med spa in Raleigh, NC. Flexible scheduling for Botox, filler, and body treatments.',
  },
  '/faq': {
    path: '/faq',
    title: 'Frequently Asked Questions | Luxe Aesthetic',
    description:
      'Answers to common questions about treatments, pricing, safety, and appointments at Luxe Aesthetic med spa in Raleigh, NC.',
  },
}
