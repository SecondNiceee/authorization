import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppEntry from './app/AppEntry.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <AppEntry />
  </StrictMode>,
) 
