import { Container, Item } from './styles'
import Link from 'next/link'

export default function Navbar() {
  return (
    <Container>
      <Link href="/" passHref>
        <Item>About Me</Item>
      </Link>
      <Link href="/" passHref>
        <Item>Download PDF resume</Item>
      </Link>
    </Container>
  )
}