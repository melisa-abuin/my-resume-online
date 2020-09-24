import styled from 'styled-components'
import MediaQueries from '../../media-queries'

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.medium4};

  ${MediaQueries.mobile`
    font-size: ${({ theme }) => theme.fonts.medium2};
  `};
`
export const Selected = styled.div`
  justify-content: center;
  position: absolute;
  display: flex;
  flex-direction: row;
  height: ${({ visible }) => visible ? '100%' : '0%'};
  opacity: ${({ visible }) => visible ? '1' : '0'};
  transition: height 0s, opacity 1s;

  ${MediaQueries.mobile`
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  `};
`
export const Paragraph = styled.p`
  max-width: 90%;
  white-space: pre-wrap;

  ${MediaQueries.mobile`
    display: inline;
    font-size: 14px;
  `};
`
export const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  
  ${MediaQueries.mobile`
    height: 800px;
  `};
`
export const Circle = styled.div`
  display: flex;
  border-radius: 50%;
  width: 420px;
  z-index: 0;
  height: 420px;
  justify-content: center;
  align-items: center;
  border: 5px solid ${({ theme }) => theme.colors.black};
  border-width: 1px 0 1px 10px;

  ${MediaQueries.mobile`
    max-width: 340px;
    width: 90vw;
    z-index: 0;
    height: 340px;
  `};
`
export const LinearCircle = styled.div`
  display: flex;
  border-radius: 50%;
  width: 390px;
  z-index: 0;
  height: 390px;
  border: 5px solid ${({ theme }) => theme.colors.aquamarine};
  justify-content: center;
  align-items: center;
  border-width: 1px 10px 1px 0;

  ${MediaQueries.mobile`
    max-width: 320px;
    width: 90vw;
    z-index: 0;
    height: 320px;
  `};
`
export const Image = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  z-index: 1;
  position: relative;

  ${MediaQueries.mobile`
    max-width: 300px;
    width: 80vw;
    z-index: 0;
    height: 300px;
  `};
`
export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0 60px;
  box-sizing: border-box;
  justify-content: space-between;

  ${MediaQueries.mobile`
    justify-content: center;
    padding: 0 10px;
  `};
`
export const Column = styled.div`
  max-width: 50%;
  position: relative;

  ${MediaQueries.mobile`
    text-align: center;
    max-width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `};
`
export const Wrapper = styled.div`
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.mercury};
  padding: 150px 0 150px;
  display: flex;
  justify-content: center;
  
  ${MediaQueries.mobile`
    overflow: hidden;
  `};
`