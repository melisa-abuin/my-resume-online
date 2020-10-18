import MediaQueries from '../../media-queries'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: ${({ additionalMargin }) => `calc(10px + ${additionalMargin}px)` };

  ${MediaQueries.mobile`
    margin-left: 0;
    text-align: center;
  `};
`

export const Title = styled.label`
  font-size: ${({ theme }) => theme.fonts.medium4};
  margin-left: 30px;
  cursor: pointer;
  font-weight: bold;

  ${MediaQueries.mobile`
    margin-left: 0;
    margin-top: 40px;
    font-size: ${({ theme }) => theme.fonts.medium2};
  `};

`
export const Body = styled.div`
  max-width: 650px;
  padding: 20px 60px;
  font-size: ${({ theme }) => theme.fonts.small6};

  ${MediaQueries.mobile`
    padding: 0 25px;  
    font-size: ${({ theme }) => theme.fonts.small4};
  `};
`
export const Icon = styled.img`
  height: 20px;
  width: 20px;
  background-color: ${({ theme }) => theme.colors.aquamarine};
  padding: 14px;
  border-radius: 50%;

  ${MediaQueries.mobile`
    display: none;
  `};
`
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  position: relative;
  padding-bottom: 10px;

  ${MediaQueries.mobile`
    justify-content: center;
  `};
`