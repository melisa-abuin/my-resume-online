import styled from 'styled-components'

export const PageContainer = styled.div`
  z-index: 2;
  position: absolute;
  background: rgba(70, 70, 70, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: 400px;
  padding: 50px;
  width: 600px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.astral};
`
export const Icon = styled.img`
  height: 30px;
  cursor: pointer;
  width: 30px;
`
export const Title = styled.label`
  font-size: ${({ theme }) => theme.fonts.small8};
  font-weight: bold;
`
export const Content = styled.p`
  height: 100%;
`
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.azure};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover{
    color: ${({ theme }) => theme.colors.azure};
    border: 1px solid ${({ theme }) => theme.colors.azure};
    background-color: inherit;
  }
`