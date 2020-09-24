import { css } from 'styled-components'

const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280
}

const MediaQueries = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default MediaQueries