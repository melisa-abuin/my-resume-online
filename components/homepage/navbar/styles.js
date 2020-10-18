import styled from 'styled-components'

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.small8};
  padding: 5px 0;
  margin: 0 12px;
  cursor: pointer;

  &:hover{
    border-bottom: 1px solid ${({ theme }) => theme.colors.aquamarine};
  }
`
export const Container = styled.div`
  position: absolute;
  top: 0;
  padding: 20px 70px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  justify-content: flex-end;
`