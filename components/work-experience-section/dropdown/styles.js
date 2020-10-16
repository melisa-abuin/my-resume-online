import styled from 'styled-components'
import MediaQueries from '../../media-queries'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Title = styled.label`
  font-size: ${({ theme }) => theme.fonts.medium4};
  margin: 0 10px;
`
export const Body = styled.div`

`
export const Icon = styled.img`
  height: 20px;

`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`