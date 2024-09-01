import * as React from 'react'
import styled from 'styled-components'
import { BorderStyle, ColorStyle, FlexStyle, StyleElement } from '~/types/style.types'

interface StyledFlexProps extends FlexStyle, StyleElement, ColorStyle, BorderStyle {}

interface FlexProps extends StyledFlexProps {
  children: React.ReactNode
}

const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${({ $direction }): string => $direction || 'row'};
  align-items: ${({ $align }): string => $align || 'stretch'};
  justify-content: ${({ $justify }): string => $justify || 'flex-start'};
  margin: ${({ $margin }): string => $margin || '0'};
  padding: ${({ $padding }): string => $padding || '0'};
  height: ${({ $height }): string => $height || ''};
  gap: ${({ $gap }): string => $gap || ''};
  background-color: ${({ $backgroundColor }): string => $backgroundColor || ''};
  border: ${({ $border }): string => $border || ''};
  border-radius: ${({ $borderRadius }): string => $borderRadius || ''};
`

export const Flex: React.FC<FlexProps> = ({ children, ...style }): JSX.Element => {
  return <StyledFlex {...style}>{children}</StyledFlex>
}
