import styled from 'styled-components'
import MediaQueries from '../../media-queries'

export const Body = styled.div`
  text-align: center;
  padding: 10px 15px;
  box-sizing: border-box;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;

  ${MediaQueries.mobile`
     width: 80vw;
  `};
`
export const ImageContaier = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:hover {
    & > div {
      transform: scale(1.4);
    }
  }
`
export const Icon = styled.div`
  background-image: linear-gradient(to bottom, rgba(100, 100, 100, 0.52), rgba(20, 20, 20, 0.73)), url(${({ url }) => url});
  position: absolute;
  background-size: cover;
  height: 200px;  
  transition: all 1s;
  z-index: -1;
  width: 100%;
`
export const Title = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.medium4};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};

  ${MediaQueries.mobile`
    font-size: ${({ theme }) => theme.fonts.medium2};
  `};
`
export const Wrapper = styled.div`
  display: flex;
  margin: 40px 30px;
  justify-content: space-between;
  align-items: flex-start;

  ${MediaQueries.mobile`
    flex-direction: column;
    align-items: center;
    margin: 0;
  `};
`