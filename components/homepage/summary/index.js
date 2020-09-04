import { Body, Card, Container, Icon, Item, LinkImage, Title, Wrapper } from './styles'
import Link from 'next/link'

export default function Summary() {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Icon src="/education-icon.png" />
          <Title>Education</Title>
          <Body> I am a fourth-year computer engineering student, with 25/44 approved subjects and an average of 7,88 </Body>
          <Link href="/education">
            <Item>see more <LinkImage src='/chevron-right.png'/></Item>
          </Link>
        </Card>
        <Card>
          <Icon src="/work-experience-icon.png" />
          <Title>Work experience</Title>
          <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</Body>
          <Link href="/education">
            <Item>see more <LinkImage src='/chevron-right.png'/></Item>
          </Link>
        </Card>
        <Card>
          <Icon src="/skills-icon.png" />
          <Title>Skills</Title>
          <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</Body>
          <Link href="/education">
            <Item>see more <LinkImage src='/chevron-right.png'/></Item>
          </Link>
        </Card>
      </Wrapper>
    </Container>
  )
}