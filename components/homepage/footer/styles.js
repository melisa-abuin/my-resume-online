import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const LinkImage = styled.img`
  filter: invert(96%) sepia(100%) saturate(0%) hue-rotate(33deg) brightness(105%) contrast(103%);
  height: 20px;
`
export const Item = styled.label`
  color: ${({ theme }) => theme.colors.white};
`
export const Link = styled.a`
  cursor: pointer;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
`