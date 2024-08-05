import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.tsx'
import { ThemeProvider } from './components/ThemeProvider.tsx'

//Dark mode



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)
