import styled, { css } from 'styled-components'

export const Title = styled.h2`
`
export const Paragraph = styled.p`
`
export const Image = styled.img`
  width: 100%;
`
export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0 60px;
  box-sizing: border-box;
  justify-content: space-between;
`
export const Column = styled.div`
  max-width: 50%;
`
export const Arrow = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  cursor: pointer;
  top: calc(50% - 10px);

  ${({ right }) => right ? 
    css` 
      right: -12px;` : 
    css` 
      left: -12px;
      transform: rotate(180deg)`
  };
`
export const Wrapper = styled.div`
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.alabaster};
  padding: 50px 0;
  display: flex;
  justify-content: center;
`