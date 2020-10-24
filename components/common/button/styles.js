import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.azure};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s;
  outline: none;

  &:hover{
    color: ${({ theme }) => theme.colors.azure};
    border: 1px solid ${({ theme }) => theme.colors.azure};
    background-color: inherit;
  }
`