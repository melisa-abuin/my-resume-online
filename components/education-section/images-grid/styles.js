import styled, { css } from 'styled-components'
import MediaQueries from '../../media-queries'

export const Title = styled.h2`
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
    flex-direction: column;
    justify-content: flex-start;
  `};
`
export const Paragraph = styled.p`
  max-width: 90%;
  display: inline;
`
export const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  
  ${MediaQueries.mobile`
    height: 700px;
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
    width: 90vw;
    z-index: 0;
    height: 250;
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
    width: 90vw;
    z-index: 0;
    height: 250;
  `};
`
export const Image = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  z-index: 1;
  position: relative;

  ${MediaQueries.mobile`
    width: 80vw;
    z-index: 0;
    height: 250;
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
  `};
`
export const Arrow = styled.img`
  height: 60px;
  width: 60px;
  position: absolute;
  cursor: pointer;
  top: calc(50% - 10px);

  ${({ right }) => right ? 
    css` 
      right: -12px;` : 
    css` 
      left: -12px;
      transform: rotate(180deg)`
  };

  ${MediaQueries.mobile`
    top: unset;
    bottom: 0;

    ${({ right }) => right ? 
      css` 
        right: 20%;` : 
      css` 
        left: 20%;`
    };
  `};
`
export const Wrapper = styled.div`
  margin-top: 100px;
  background-color: ${({ theme }) => theme.colors.alabaster};
  padding: 50px 0;
  display: flex;
  justify-content: center;
  
  ${MediaQueries.mobile`
    overflow: hidden;
  `};
`