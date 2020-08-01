import styled from 'styled-components'

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`
export const Container = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1`
  z-index: 1;
  color: ${({ theme }) => theme.colors.white};
`
export const Subtitle = styled.p`
  z-index: 1;
  color: ${({ theme }) => theme.colors.white};
`