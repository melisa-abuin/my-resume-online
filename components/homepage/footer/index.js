import { Container, Item, Link, LinkImage } from './styles'

export default function Footer() {
    return (
      <Container>
        <Link href="https://www.linkedin.com/in/melisa-abuin-99273b111/">
          <LinkImage src='/linkedin-icon.png'/> 
          <Item>My profile </Item>
        </Link>
        <Link href="https://github.com/Mel-A">
          <LinkImage src='/github-icon.png'/> 
          <Item>Repository </Item>
        </Link>
        <Link href="mailto:melisa.abuin@gmail.com?Subject=Website%20visitor">
          <LinkImage src='/gmail-icon.png'/> 
          <Item>melisa.abuin@gmail.com </Item>
        </Link>
      </Container>
    )
}