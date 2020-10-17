import styled from 'styled-components'
import MediaQueries from '../../media-queries'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
`

export const Title = styled.label`
  font-size: ${({ theme }) => theme.fonts.medium4};
  margin: 0 10px;
  cursor: pointer;
  font-weight: bold;
`
export const Body = styled.div`
  max-width: 650px;
  padding: 20px 30px;
  font-size: ${({ theme }) => theme.fonts.small6};
`
export const Icon = styled.img`
  height: 20px;
  width: 20px;
  filter: invert(100%);
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`