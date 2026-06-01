/// <reference types="vinxi/types/client" />
import { StartClient } from '@tanstack/start'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { createRouter } from './router'
import './styles/globals.css'

const router = createRouter()

const container = document.getElementById('app')!

// Try hydration first, fallback to createRoot if it fails
try {
  hydrateRoot(container, <StartClient router={router} />)
} catch (e) {
  console.error('Hydration failed, falling back to createRoot:', e)
  container.innerHTML = ''
  createRoot(container).render(<StartClient router={router} />)
}
