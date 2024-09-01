import * as React from 'react'
import styled from 'styled-components'
import { themeColors } from '~/shared/styles/colors.const'
import { FONT_WEIGHT } from '~/shared/styles/fonts/font-weight.enum'
import { SIZE_SCALE } from '~/shared/styles/size.enum'
import { BorderStyle, ColorStyle, StyleElement, TypographyStyle } from '~/types/style.types'

interface StyledInputProps extends StyleElement, BorderStyle, ColorStyle, TypographyStyle {}

const StyledInput = styled.input<StyledInputProps>`
  margin: ${({ $margin }): string => $margin || '0'};
  padding: ${({ $padding }): string => $padding || '0'};
  width: ${({ $width }): string => $width || ''};
  height: ${({ $height }): string => $height || ''};
  border-radius: ${({ $borderRadius }): string => $borderRadius || ''};
  color: ${({ $color }): string => $color || themeColors.backdrop};
  background-color: ${({ $backgroundColor }): string => $backgroundColor || themeColors.textPrimary};
  font-size: ${({ $fontSize }): string => $fontSize || SIZE_SCALE.REGULAR};
  font-weight: ${({ $fontWeight }): string => $fontWeight || FONT_WEIGHT.REGULAR};
  line-height: ${({ $lineHeight }): string => $lineHeight || SIZE_SCALE.LARGE};
`

interface InputProps extends StyledInputProps {
  value: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
}

export const Input: React.FC<InputProps> = ({
  value,
  name,
  type = 'text',
  placeholder,
  onChange,
  ...style
}): JSX.Element => {
  return <StyledInput value={value} onChange={onChange} type={type} name={name} placeholder={placeholder} {...style} />
}
