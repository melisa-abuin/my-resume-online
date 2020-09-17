import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Image = styled.img`
  ${({ first }) => first &&  css` height: 180px; width: 200px; z-index: 2;`}
  ${({ second }) => second &&  css` height: 160px; width: 180px; z-index: 1;`}
  ${({ third }) => third &&  css` height: 140px; width: 160px; z-index: 0;`}
  box-shadow: 0px 0px 40px 0.5px ${({ theme }) => theme.colors.black};
;

  ${({ right }) => right &&  css` margin-left: -80px;`}
  ${({ left }) => left &&  css` margin-right: -80px;`}
`