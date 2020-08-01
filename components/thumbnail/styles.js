import styled from 'styled-components'

export const Image = styled.img`
  border-radius: 50%;
  height: 230px;
  width: 230px;
`
export const Border = styled.div`
  border-radius: 50%;
  margin-top: -120px;
  padding: 10px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.silver};
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`