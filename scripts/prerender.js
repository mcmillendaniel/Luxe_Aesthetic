import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { loadEnv } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const serverDir = path.join(rootDir, 'dist-server')

// Resolve the site URL from .env files / process.env (Vercel sets it there).
const env = loadEnv('production', rootDir, 'VITE_')
const SITE_URL = (env.VITE_SITE_URL || 'https://example.com').replace(/\/+$/, '')

// Opt-in de-indexing for the shared demo host. The live demo sets VITE_NOINDEX
// so it stays out of search results; client clones leave it unset and remain
// fully indexable. Read the same way as VITE_SITE_URL above.
const NOINDEX = env.VITE_NOINDEX === 'true' || env.VITE_NOINDEX === '1'

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const { render, routeMeta, faqClusters } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
)

// routeMeta is the single source of truth for which routes get prerendered.
const routes = Object.keys(routeMeta)

const MIN_BODY_TEXT_LENGTH = 500

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function absoluteUrl(routePath) {
  // routePath always begins with "/"; SITE_URL has no trailing slash.
  return SITE_URL + routePath
}

// Build the per-route <head> tags injected at the <!--head-tags--> marker.
function buildHeadTags(meta) {
  const title = escapeHtml(meta.title)
  const description = escapeHtml(meta.description)
  const tags = []

  // Demo de-indexing: when VITE_NOINDEX is set, every route carries a noindex
  // robots tag. Canonical/OG are left untouched so the launch gate still sees
  // exactly one canonical. Skipped for pages that are already noindex (e.g. the
  // 404) so they don't get a duplicate robots tag.
  if (NOINDEX && !meta.noindex) {
    tags.push('<meta name="robots" content="noindex, nofollow" />')
  }

  // noindex pages get a robots tag and no canonical (a canonical pointing at a
  // non-indexed URL is contradictory); indexable pages get a canonical link.
  if (meta.noindex) {
    tags.push('<meta name="robots" content="noindex, nofollow" />')
  } else {
    const canonicalUrl = absoluteUrl(meta.canonical ?? meta.path)
    tags.push(`<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`)
  }

  tags.push(
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="Luxe Aesthetic" />',
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`
  )

  // Crawlers do not resolve relative image paths against the page URL, so the
  // share image is always emitted as an absolute URL.
  const imageUrl = meta.image ? escapeHtml(absoluteUrl(meta.image)) : null

  if (imageUrl) {
    tags.push(
      `<meta property="og:image" content="${imageUrl}" />`,
      '<meta property="og:image:width" content="1200" />',
      '<meta property="og:image:height" content="630" />'
    )
  }

  if (!meta.noindex) {
    tags.push(
      `<meta property="og:url" content="${escapeHtml(absoluteUrl(meta.canonical ?? meta.path))}" />`
    )
  }

  tags.push(
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`
  )

  if (imageUrl) {
    tags.push(`<meta name="twitter:image" content="${imageUrl}" />`)
  }

  return tags.join('\n      ')
}

// Metadata for the 404 page. Kept out of routeMeta so it is excluded from the
// launch gate (it is intentionally thin and noindex).
const notFoundMeta = {
  path: '/404',
  title: 'Page Not Found | Luxe Aesthetic',
  description:
    'The page you are looking for could not be found. Explore Luxe Aesthetic med spa services in Raleigh, NC or return to the homepage.',
  noindex: true,
}

// Replace the template's default <title> / description and inject head tags
// plus any JSON-LD structured data for the route.
function applyMeta(html, meta, jsonLd = '') {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapeHtml(meta.description)}" />`
    )
    .replace('<!--head-tags-->', buildHeadTags(meta))
    .replace('<!--json-ld-->', jsonLd)
}

// -- Structured data (JSON-LD) -----------------------------------------------

// Inline demo business details. These are placeholder NAP/hours values that
// will be extracted to a shared config in a later session.
const BUSINESS = {
  name: 'Luxe Aesthetic',
  description:
    'Med spa in Raleigh, NC offering Botox, dermal filler, body contouring, and physician-guided medical weight management.',
  telephone: '+1-919-555-0100',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '000 Demo Street, Suite 100',
    addressLocality: 'Raleigh',
    addressRegion: 'NC',
    postalCode: '27601',
    addressCountry: 'US',
  },
  openingHours: [
    { days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    { days: ['Saturday'], opens: '10:00', closes: '15:00' },
  ],
}

const businessId = SITE_URL + '/#business'

// Per-service-page schema seed: display name + serviceType.
const serviceSchema = {
  '/services/botox': { name: 'Botox', serviceType: 'Botox injections' },
  '/services/filler': { name: 'Dermal Filler', serviceType: 'Dermal filler injections' },
  '/services/body-contouring': {
    name: 'Body Contouring',
    serviceType: 'Non-surgical body contouring',
  },
  '/services/medical-weight-management': {
    name: 'Medical Weight Management',
    serviceType: 'Medical weight management',
  },
}

function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'HealthAndBeautyBusiness'],
    '@id': businessId,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL + '/',
    telephone: BUSINESS.telephone,
    priceRange: BUSINESS.priceRange,
    address: BUSINESS.address,
    areaServed: { '@type': 'City', name: 'Raleigh' },
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  }
}

function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqClusters
      .flatMap((cluster) => cluster.faqs)
      .map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
  }
}

// Serialize one or more schema objects into <script type="application/ld+json">
// tags. `<` is escaped to < so the payload can never break out of the tag.
function renderJsonLd(schemas) {
  return schemas
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema).replace(
          /</g,
          '\\u003c'
        )}</script>`
    )
    .join('\n      ')
}

// JSON-LD for a given route, keyed off routeMeta paths. Returns '' when none.
function buildJsonLd(route) {
  if (route === '/') return renderJsonLd([businessSchema()])
  if (route === '/faq') return renderJsonLd([faqSchema()])

  const svc = serviceSchema[route]
  if (svc) {
    const meta = routeMeta[route]
    const url = absoluteUrl(meta.canonical ?? meta.path)
    return renderJsonLd([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': url + '#service',
        name: svc.name,
        serviceType: svc.serviceType,
        description: meta.description,
        url,
        provider: { '@type': ['MedicalBusiness', 'HealthAndBeautyBusiness'], '@id': businessId },
        areaServed: { '@type': 'City', name: 'Raleigh' },
      },
    ])
  }

  return ''
}

// Rough count of visible body text (tags stripped, whitespace collapsed).
function visibleTextLength(appHtml) {
  return appHtml
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim().length
}

const report = []

for (const route of routes) {
  const meta = routeMeta[route]
  if (!meta) {
    console.error(`\nMissing routeMeta for ${route}`)
    process.exit(1)
  }

  process.stdout.write(`  prerendering ${route} ...`)
  const appHtml = await render(route)
  const html = applyMeta(template, meta, buildJsonLd(route)).replace(
    '<!--app-html-->',
    appHtml
  )

  const outPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.slice(1), 'index.html')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html)

  report.push({
    route,
    title: meta.title,
    description: meta.description,
    canonicalCount: (html.match(/rel="canonical"/g) || []).length,
    bodyTextLength: visibleTextLength(appHtml),
  })

  console.log('done')
}

// Prerender a branded 404 page. Rendering an unmatched path resolves the
// catch-all "*" route (NotFoundPage). Vercel serves dist/404.html for any
// path with no matching static file.
process.stdout.write('  prerendering 404 ...')
const notFoundApp = await render('/__not-found__')
const notFoundHtml = applyMeta(template, notFoundMeta).replace(
  '<!--app-html-->',
  notFoundApp
)
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml)
console.log('done')

// Generate sitemap.xml from the route list, excluding the /services/glp1 alias
// (it canonicalizes to the medical weight management page).
// When de-indexing the demo, emit an empty sitemap so we never advertise URLs
// that carry a noindex tag (a mixed index/noindex signal). robots.txt still
// points here, so the referenced sitemap.xml keeps resolving.
const sitemapUrls = (NOINDEX ? [] : routes)
  .filter((route) => route !== '/services/glp1')
  .map((route) => `  <url>\n    <loc>${escapeHtml(absoluteUrl(route))}</loc>\n  </url>`)
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
console.log('  wrote sitemap.xml')

// robots.txt pointing crawlers at the sitemap (Sitemap needs an absolute URL,
// so it is generated here to track VITE_SITE_URL).
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
fs.writeFileSync(path.join(distDir, 'robots.txt'), robots)
console.log('  wrote robots.txt')

// Clean up the server bundle — it's only needed during the build step.
fs.rmSync(serverDir, { recursive: true, force: true })

// ---------------------------------------------------------------------------
// Launch gate: a bad build must not deploy. Fail hard on any SEO regression.
// ---------------------------------------------------------------------------
const failures = []

const seenTitles = new Map()
const seenDescriptions = new Map()

for (const page of report) {
  // (a) unique <title>
  if (seenTitles.has(page.title)) {
    failures.push(
      `Duplicate <title> "${page.title}" on ${page.route} and ${seenTitles.get(page.title)}`
    )
  } else {
    seenTitles.set(page.title, page.route)
  }

  // (b) meta description present and unique
  if (!page.description || !page.description.trim()) {
    failures.push(`Missing meta description on ${page.route}`)
  } else if (seenDescriptions.has(page.description)) {
    failures.push(
      `Duplicate meta description on ${page.route} and ${seenDescriptions.get(page.description)}`
    )
  } else {
    seenDescriptions.set(page.description, page.route)
  }

  // (c) exactly one canonical per route
  if (page.canonicalCount !== 1) {
    failures.push(
      `Expected exactly 1 canonical on ${page.route}, found ${page.canonicalCount}`
    )
  }

  // (d) visible body text above threshold
  if (page.bodyTextLength < MIN_BODY_TEXT_LENGTH) {
    failures.push(
      `Thin content on ${page.route}: ${page.bodyTextLength} chars (min ${MIN_BODY_TEXT_LENGTH})`
    )
  }
}

if (failures.length > 0) {
  console.error('\nLaunch gate FAILED:')
  for (const f of failures) console.error(`  - ${f}`)
  process.exit(1)
}

console.log(`\nLaunch gate passed for ${report.length} routes.`)
console.log('\nAll routes prerendered.')
