import * as React from 'react'
import styled from 'styled-components'

const StyledAppLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

interface AppLayoutProps {
  children: React.ReactNode
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }): JSX.Element => {
  return <StyledAppLayout>{children}</StyledAppLayout>
}
