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

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const { render, routeMeta } = await import(
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
  const canonicalUrl = absoluteUrl(meta.canonical ?? meta.path)
  const title = escapeHtml(meta.title)
  const description = escapeHtml(meta.description)

  const tags = [
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
  ]

  if (meta.noindex) {
    tags.push('<meta name="robots" content="noindex, nofollow" />')
  }

  tags.push(
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="Luxe Aesthetic" />',
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`
  )

  return tags.join('\n      ')
}

// Replace the template's default <title> / description and inject head tags.
function applyMeta(html, meta) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${escapeHtml(meta.description)}" />`
    )
    .replace('<!--head-tags-->', buildHeadTags(meta))
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
  const html = applyMeta(template, meta).replace('<!--app-html-->', appHtml)

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
