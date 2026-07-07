import { renderToString } from 'react-dom/server'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router'
import { routeConfig } from './app/routeConfig'

// Re-exported so the prerender script (plain Node) can read route metadata
// from the SSR bundle without needing a TypeScript loader.
export { routeMeta } from './app/routeMeta'
export { faqClusters } from './app/data/faqData'

export async function render(url: string) {
  const { query, dataRoutes } = createStaticHandler(routeConfig)
  const request = new Request(`http://localhost${url}`)
  const context = await query(request)

  if (context instanceof Response) throw context

  const staticRouter = createStaticRouter(dataRoutes, context)

  return renderToString(
    <div className="overflow-x-hidden">
      <StaticRouterProvider router={staticRouter} context={context} />
    </div>
  )
}
