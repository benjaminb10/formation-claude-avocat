/// <reference types="vinxi/types/client" />
import { StartClient } from '@tanstack/start'
import { createRoot } from 'react-dom/client'
import { createRouter } from './router'
import './styles/globals.css'

const router = createRouter()

// Using createRoot instead of hydrateRoot as a workaround for hydration issues
const container = document.getElementById('app') || document.body
createRoot(container).render(<StartClient router={router} />)
