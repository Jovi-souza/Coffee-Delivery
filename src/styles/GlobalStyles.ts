import { globalCss } from './stitches.config'

export const GlobalCss = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    webkitFontSmoothing: 'antialiased',
    backgroundColor: '$background',
  },

  h1: {
    fontFamily: 'Baloo2, cursive',
  },

  html: {
    fontSize: '62.5%',
    scrollBehavior: 'smooth',
    fontFamily: 'Roboto, sans-serif',
  },

  button: {
    cursor: 'pointer',
  },

  disabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})
