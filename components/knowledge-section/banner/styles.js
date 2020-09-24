import styled from 'styled-components'
import MediaQueries from '../../media-queries'

export const Container = styled.div`
  z-index: 1;
  position: relative; 
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 1300px;
  height: 400px;

  ${MediaQueries.mobile`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  `};
`
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.medium4};

  ${MediaQueries.mobile`
    font-size: ${({ theme }) => theme.fonts.medium2};
  `};
`
export const Description = styled.p`
  word-wrap: break-word;
  max-width: 50%;
  font-size: ${({ theme }) => theme.fonts.small8};

  ${MediaQueries.mobile`
    max-width: 100%;
    font-size: ${({ theme }) => theme.fonts.small6};
  `};
`
export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: linear-gradient(to bottom, rgba(39, 39, 39,0.7) 0%, rgba(39, 39, 39,0.7) 100%), url('/desk-image.jpg');
  position: absolute;
  z-index: 0;
  background-position: top;

  ${MediaQueries.mobile`
    background-position: top center;
  `};
`
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`