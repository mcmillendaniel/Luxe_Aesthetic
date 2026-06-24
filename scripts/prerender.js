import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const serverDir = path.join(rootDir, 'dist-server')

const routes = [
  '/',
  '/about',
  '/services',
  '/services/botox',
  '/services/filler',
  '/services/body-contouring',
  '/services/medical-weight-management',
  '/services/glp1',
  '/results',
  '/memberships',
  '/book',
  '/faq',
]

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)

for (const route of routes) {
  process.stdout.write(`  prerendering ${route} ...`)
  const appHtml = await render(route)
  const html = template.replace('<!--app-html-->', appHtml)

  const outPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.slice(1), 'index.html')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html)
  console.log('done')
}

// Clean up the server bundle — it's only needed during the build step
fs.rmSync(serverDir, { recursive: true, force: true })

console.log('\nAll routes prerendered.')
