import styled, { css, keyframes } from 'styled-components'
import MediaQueries from '../../media-queries'

const openClose = keyframes`
  from {
    &::after {
      transform: rotateX(0deg);
      z-index: -1;
    }
  }

  to {
    &::after {
      transform: rotateX(180deg);
      z-index: 2;
    }
  }
`;

const showLetter = keyframes`
  from {
    height: 100%;
    top: 0; 
  }

  to {
    height:  200px;
    top:  -70%;
  }
`;


export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 500px;
  align-items: center;
`
export const Information = styled.div`
`
export const Title = styled.h2`
  margin-top: 0px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  justify-content: space-between;
`
export const Paragraph = styled.p`
`
export const Container = styled.div`
  position: relative;
  width: 550px;
  height: 166px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.malibu};
  border-radius: 0 0 5px 5px;
  box-shadow: 0 0 1px  ${({ theme }) => theme.colors.malibu} inset;
  z-index: 1;

  &::after{
    transform: ${({ showLetter }) => showLetter ? 'rotateX(0deg)' : 'rotateX(180deg)'}; 
		transform-origin: center bottom;
    z-index: ${({ showLetter }) => showLetter ? '-1' : '2'}; 
    transition: all 1s;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-width: 83px 275px;
    border-bottom-color:  ${({ theme }) => theme.colors.malibu};
    top: -100%;
    left: 0px;
  }
`
export const Paper = styled.div`
  background: #fff3cc;
  position: relative;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 90%;
  height: ${({ showLetter }) => showLetter ? '200px' : '100%'};
  top: ${({ showLetter }) => showLetter ? '-70%' : '0'};
  transition: all 0.5s;
  overflow: hidden;
  z-index: 1;
  border-radius: 5px;
`
export const Shape = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-width: 83px 275px;
  border-right-color: ${({ theme }) => theme.colors.sail};
  border-left-color:#94c8ff;
  border-bottom-color: #94c8ff;
  top: 0;
  border-radius: 0 0 5px 5px;
  transform: rotate(360deg);
  z-index: 2;
  box-shadow: 0 1px 1px rgba(0,0,0,0.25);
`