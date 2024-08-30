import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '~pages/router'
import GlobalStyle from './shared/styles/global.styles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  </StrictMode>,
)
