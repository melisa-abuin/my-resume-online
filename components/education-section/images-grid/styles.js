import styled, { css } from 'styled-components'

export const Title = styled.h2`
`
export const Selected = styled.div`
  display: ${({ visible }) => visible ? 'flex' : 'none'};
  justify-content: space-between;
  flex-direction: row;
`
export const Paragraph = styled.p`
  max-width: 90%;
`
export const Rectangle = styled.div`
  position: absolute;
  width: 100%;
  z-index: 0;
  height: 350px;
  top: -20px;
  background-color: ${({ theme }) => theme.colors.black};
`
export const LinearRectangle = styled.div`
  position: absolute;
  width: 150px;
  z-index: 0;
  height: 150px;
  top: -40px;
  right: -20px;
  border: 5px solid ${({ theme }) => theme.colors.aquamarine};
  background-color: ${({ theme }) => theme.colors.transparent};
`
export const Image = styled.img`
  width: 95%;
  height: 350px;
  z-index: 1;
  position: relative;
  top: 0;
  left: -10px;
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
  position: relative;
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