import { Body, Card, Container, Icon, Title, Wrapper } from './styles'
//import { EducationIcon } from '../../public/education-icon.png'

export default function Summary() {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Icon src="/education-icon.png" />
          <Title>Education</Title>
          <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</Body>
        </Card>
        <Card>
          <Icon src="/education-icon.png" />
          <Title>Education</Title>
          <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</Body>
        </Card>
        <Card>
          <Icon src="/education-icon.png" />
          <Title>Education</Title>
          <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</Body>
        </Card>
      </Wrapper>
    </Container>
  )
}