import { createGlobalStyle } from 'styled-components'
import { themeColors } from './colors.const'
import { fonts } from './fonts/fonts.const'
import { FONT_WEIGHT } from './fonts/font-weight.enum'
import ManropeTTF from '~assets/fonts/Manropet.ttf'
import MontserratTTF from '~assets/fonts/Montserrat.ttf'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
    color: ${themeColors.textPrimary};
    background-color: ${themeColors.backdrop};
    font-family: ${fonts.montserrat};
    font-weight: ${FONT_WEIGHT.REGULAR};
  }

  * {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    display: block;
    text-decoration: none;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
  outline: none !important;
  }

  input {
    outline: none !important;
    border: none;
  }
  
  @font-face {
    font-family: ${fonts.manrope};
    src: url('${ManropeTTF}');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }

  @font-face {
    font-family: ${fonts.montserrat};
    src: url('${MontserratTTF}');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    font-display: swap;
  }
`

export default GlobalStyle
