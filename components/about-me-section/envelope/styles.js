import styled, { css, keyframes } from 'styled-components'
import MediaQueries from '../../media-queries'

const openClose = keyframes`
  from {
    transform: rotateX(0deg);
    z-index: -1; 
  }
  to {
    transform: rotateX(180deg);
    z-index: 2;
  }
`;

const showHide = keyframes`
  from {
    height: 100%;
    top: 0; 
  }

  to {
    height:  400px;
    top:  -70%;
  }
`;


export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 600px;
  align-items: center;
`
export const Information = styled.div`
`
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.small4};
  font-weight: 300px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  align-items: center;
`
export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fonts.small4};
`
export const Container = styled.div`
  position: relative;
  width: 500px;
  height: 250px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.malibu};
  border-radius: 0 0 5px 5px;
  box-shadow: 0 0 1px  ${({ theme }) => theme.colors.malibu} inset;
  z-index: 1;

  &::after{
    ${({ animation, showLetter }) => animation && css`animation: ${openClose} forwards ${showLetter ? '1s': '1s 2s'}`}; 
    transform: ${({ showLetter }) => showLetter ? 'rotateX(180deg)' : 'rotateX(0deg)'};
    z-index: ${({ showLetter }) => showLetter ? '2' : '-1'};
    animation-direction: ${({ showLetter }) => showLetter ? 'reverse' : 'normal'};
    
		transform-origin: center bottom;
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-width: 125px 250px;
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
  ${({ animation, showLetter }) => animation && css`animation: ${showHide} forwards ${showLetter ? '1s 1.5s': '1s'} `}; 
  height: ${({ showLetter }) => showLetter ? '100%' : '400px'};
  top: ${({ showLetter }) => showLetter ? '0':'-70%' };
  animation-direction: ${({ showLetter }) => showLetter ? 'normal' : 'reverse'};
  
  overflow: hidden;
  z-index: 1;
  border-radius: 5px;
`
export const Shape = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-width: 125px 250px;
  border-right-color: ${({ theme }) => theme.colors.sail};
  border-left-color:#94c8ff;
  border-bottom-color: #94c8ff;
  top: 0;
  border-radius: 0 0 5px 5px;
  transform: rotate(360deg);
  z-index: 2;
  box-shadow: 0 1px 1px rgba(0,0,0,0.25);
`