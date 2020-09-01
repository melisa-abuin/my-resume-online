import { Arrow, Column, Container, Image, Paragraph, Title, Wrapper } from './styles'

export default function ImagesGrid() {
  return (
    <Wrapper>
      <Container>
        <Arrow src='/chevron-shape.png' />
        <Column>
          <Title>Universidad nacional de la matanza</Title>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Paragraph>
        </Column>
        <Column>
          <Image src='https://www.vivieloeste.com.ar/wp-content/uploads/2018/05/unlam.jpg' alt='main-image' />
        </Column>
        <Arrow right src='/chevron-shape.png' />
      </Container>
    </Wrapper>
  )
}
