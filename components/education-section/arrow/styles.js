import styled, { css } from 'styled-components'
import MediaQueries from '../../media-queries'

export const Image = styled.img`
  height: 60px;
  width: 60px;
  ${({ right }) => !right && css`transform: rotate(180deg);`}

  ${MediaQueries.mobile`
    height: 30px;
    width: 30px;
  `};
`
export const Swipper = styled.div`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 2;
  top: calc(50% - 10px);

  ${({ right }) => right ? 
    css` 
      flex-direction: row-reverse;
      right: -12px;` : 
    css` 
      left: -12px;`
  };

  ${MediaQueries.mobile`
    top: unset;
    bottom: -10px;

    ${({ right }) => right ? 
      css` 
        right: 15%;` : 
      css` 
        left: 15%;`
    };
  `};
`
export const Indicator = styled.label`
  display: none;
  margin: 0 20px;
  ${MediaQueries.mobile`
    display: inline;
  `};
`