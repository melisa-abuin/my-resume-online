import styled, { css } from 'styled-components'

export const Title = styled.h2`
`
export const Selected = styled.div`
  justify-content: space-between;
  position: absolute;
  display: flex;
  flex-direction: row;
  height: ${({ visible }) => visible ? '100%' : '0%'};
  opacity: ${({ visible }) => visible ? '1' : '0'};
  transition: height 0s, opacity 3s;
`
export const Paragraph = styled.p`
  max-width: 90%;
`
export const Carousel = styled.p`
  position: relative;
  width: 100%;
  height: 350px;
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