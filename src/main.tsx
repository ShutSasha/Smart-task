import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '~pages/router'
import GlobalStyle from './shared/styles/global.styles'
import { Provider } from 'react-redux'
import { store } from './app/store'

function render(): void {
  const rootNode = createRoot(document.getElementById('root') as HTMLElement)

  rootNode.render(
    <StrictMode>
      <Provider store={store}>
        <>
          <GlobalStyle />
          <RouterProvider router={router} />
        </>
      </Provider>
    </StrictMode>,
  )
}

render()
