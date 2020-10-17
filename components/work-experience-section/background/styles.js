import MediaQueries from '../../media-queries'
import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  z-index: 1;
  flex-direction: row;
  align-items: center;
  display: flex;
  margin-left: 20px;
  box-sizing: border-box;
`

export const DropdownGroup = styled.div`
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  box-shadow: 0px 2px 40px 1px ${({ theme }) => theme.colors.gray};
`
export const Wrapper =  styled.div`
  width: 100%;
  position: relative;
  padding: 80px 0;
  background-color: #cce5ff;
  display: flex;
  overflow: hidden;
  justify-content: center;
`