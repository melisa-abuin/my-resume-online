import styled from 'styled-components'

export const Body = styled.div`
  text-align: justify;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`
export const Icon = styled.img`
  height: 100px;
  width: 100px;
  filter: invert(45%) sepia(37%) saturate(726%) hue-rotate(154deg) brightness(88%) contrast(91%);
`
export const Title = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.medium4};
  font-weight: bold;
`
export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const Container = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  margin-top: 40px;
`