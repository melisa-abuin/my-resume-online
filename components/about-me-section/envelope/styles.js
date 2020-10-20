import styled from 'styled-components'
import MediaQueries from '../../media-queries'

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 500px;
  align-items: center;
`
export const Information = styled.div`
`
export const Title = styled.h2`
`

export const Container = styled.div`
  position: relative;
  width: 550px;
  height: 166px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.malibu};
  border-radius: 0 0 5px 5px;
  box-shadow: 0 0 1px  ${({ theme }) => theme.colors.malibu} inset;
  z-index: 1;
  &::after{
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 0 solid transparent;
    border-width: 83px 275px;
    border-bottom-color:  ${({ theme }) => theme.colors.malibu};
    top: -100%;
    left: 0px;
  }
`
export const Paper = styled.div`
  background:  ${({ theme }) => theme.colors.white};
  position: relative;
  width: 90%;
  height: 100%;
  z-index: 1;
  border-radius: 5px;
`
export const Shape = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-width: 83px 275px;
  border-right-color: ${({ theme }) => theme.colors.sail};
  border-left-color:#94c8ff;
  border-bottom-color: #94c8ff;
  top: 0;
  border-radius: 0 0 5px 5px;
  transform: rotate(360deg);
  z-index: 2;
  box-shadow: 0 1px 1px rgba(0,0,0,0.25);
`