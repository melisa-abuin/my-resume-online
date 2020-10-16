import styled from 'styled-components'
import MediaQueries from '../../media-queries'

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 80px 0;
  height: 450px;
  z-index: 1;
  position: absolute;
  box-sizing: border-box;
`
export const Wrapper =  styled.div`
  width: 100%;
  height: 400px;
  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: -1;
    background-image:
      linear-gradient(white 3%, transparent 3%),
      linear-gradient(to right, grey 97%, white 9%);
    background-size: 40px 40px;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: -1;
    background-image: linear-gradient(to top,white 30%, transparent  80%);
  }
`