import { Container , Description, Image, Title, Wrapper } from './styles'
import Gallery from '../gallery'

export default function Banner() {
    return (
      <Wrapper>
        <Image />
        <Container>
          <Title>Lorem ipsum dolor sit amet, consectetur  </Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</Description>
          <Gallery />
        </Container>
      </Wrapper>
    )
}