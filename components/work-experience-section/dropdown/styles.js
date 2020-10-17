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
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: ${({ additionalMargin }) => `calc(10px + ${additionalMargin}px)` };
`

export const Title = styled.label`
  font-size: ${({ theme }) => theme.fonts.medium4};
  margin-left: 30px;
  cursor: pointer;
  font-weight: bold;
`
export const Body = styled.div`
  max-width: 650px;
  padding: 20px 60px;
  opacity: ${({ visible }) => visible ? '1' : '0'};
  transition: all 2s ease;
  font-size: ${({ theme }) => theme.fonts.small6};
`
export const Icon = styled.img`
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.colors.aquamarine};
  padding: 14px;
  border-radius: 50%;
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  padding-bottom: 10px;
`

export const Line = styled.div`
  height: 2px;
  position: absolute;
  bottom: 0;
  left: -20%;
  width: 20%;
  background: linear-gradient(to right, 
    #cce5ff 0%,
    ${({ theme }) => theme.colors.azure} 80%,
    ${({ theme }) => theme.colors.aquamarine} 100%
  );
  ${({ animation }) => animation && css`animation: ${move} 4s 1`};
  animation-fill-mode: forwards;
  animation-delay: ${({ delay }) => delay}s;
`