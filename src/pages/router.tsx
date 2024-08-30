import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <div>Not found page. 404</div>,
  },
])
