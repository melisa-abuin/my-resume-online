import MediaQueries from '../../media-queries'
import styled from 'styled-components'
import { PageSection } from '../../common'

export const Container = styled.div`
  z-index: 1;
  flex-direction: row;
  align-items: center;
  display: flex;
  box-sizing: border-box;

  ${MediaQueries.mobile`
    flex-direction: column;
  `};
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  box-shadow: 0px 2px 40px 1px ${({ theme }) => theme.colors.gray};

  ${MediaQueries.mobile`
    height: 150px;
    width: 150px;
  `};
`
export const Wrapper = styled(PageSection)`
  position: relative;
  padding: 80px 0;
  background-color:  ${({ theme }) => theme.colors.onahau};
  overflow: hidden;
`