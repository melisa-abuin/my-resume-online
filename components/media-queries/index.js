import { css } from 'styled-components'

export const breakpoints = {
  mobile: 768,
  tablet: 1023,
  desktop: 1280
}

export const MediaQueries = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})
