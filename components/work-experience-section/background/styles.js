import MediaQueries from '../../media-queries'
import styled, { keyframes, css } from 'styled-components'

const move = keyframes`
  from {
    left: -20%;
  }

  to {
    left: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  color: white;
  max-width: 1300px;
  padding: 80px 0;
  height: 450px;
  z-index: 1;
  box-sizing: border-box;
`
export const Wrapper =  styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  padding: 20px 0;
  background-color: black;
  display: flex;
  overflow: hidden;
  justify-content: center;
`
export const Line = styled.div`
  height: 1px;
  position: absolute;
  top: ${({ top }) => top ? `${top}px` : 'unset'};
  bottom: ${({ bottom }) => bottom ? `${bottom}px` : 'unset'};

  left: -20%;
  width: 20%;
  background: linear-gradient(to right, 
    ${({ theme }) => theme.colors.black} 0%,
    ${({ theme }) => theme.colors.azure} 80%,
    ${({ theme }) => theme.colors.aquamarine} 100%
  );
  ${({ animation }) => animation && css`animation: ${move} 2s 1`};
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay}s;
`