import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './app/App'
import './styles/index.css'

const container = document.getElementById('root')!
// Dev has no server HTML; prod has prerendered content to hydrate against
if (import.meta.env.DEV) {
  createRoot(container).render(<App />)
} else {
  hydrateRoot(container, <App />)
}
