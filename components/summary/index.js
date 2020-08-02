import { Body, Card, Container, Icon, Title, Wrapper } from './styles'

export default function Summary() {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Icon src="/education-icon.png" />
          <Title>Education</Title>
          <Body> I am a fourth-year computer engineering student, with 25/44 approved subjects and an average of 7,88 </Body>
        </Card>
        <Card>
          <Icon src="/work-experience-icon.png" />
          <Title>Work experience</Title>
          <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</Body>
        </Card>
        <Card>
          <Icon src="/skills-icon.png" />
          <Title>Skills</Title>
          <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</Body>
        </Card>
      </Wrapper>
    </Container>
  )
}