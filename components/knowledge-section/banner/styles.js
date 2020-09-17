import styled from 'styled-components'

export const Container = styled.div`
  z-index: 1;
  position: relative; 
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 1300px;
  height: 300px;
`
export const Title = styled.h2`
`
export const Description = styled.p`
  word-wrap: break-word;
  max-width: 50%;
`
export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: linear-gradient(to bottom, rgba(39, 39, 39,0.7) 0%, rgba(39, 39, 39,0.7) 100%), url('/desk-image.jpg');
  position: absolute;
  object-position: top;
  z-index: 0;
`
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`