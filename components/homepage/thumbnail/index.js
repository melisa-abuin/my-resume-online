import { Border, Container, Image } from './styles'

export default function Thumbnail() {
  return (
    <Container>
      <Border>
        <Image src='https://avatars2.githubusercontent.com/u/24437446?s=460&u=da292bb1b494d65d5f0a513112c1bf83ece8a9f4&v=4' alt='main-image' />
      </Border>
    </Container>
  )
}