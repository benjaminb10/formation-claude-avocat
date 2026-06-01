/// <reference types="vinxi/types/client" />
import { StartClient } from '@tanstack/start'
import { createRoot } from 'react-dom/client'
import { createRouter } from './router'
import './styles/globals.css'

const router = createRouter()

const container = document.getElementById('app')!

// Skip hydration - use createRoot for full client render
// This avoids hydration mismatch errors with SSR
createRoot(container).render(<StartClient router={router} />)
