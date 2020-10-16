import { Container, Wrapper } from './styles'
import { Dropdown } from '..'


const jobs = [
  { title: 'jobs.jpmorgan', description: '' },
  { title: 'jobs.valtech', description: '' },
  { title: 'jobs.gyl', description: ''}
]

export default function Background() {
  return (
    <Wrapper>
      <Container>
        {jobs.map((item, index) => (
          <Dropdown key={index} {...item} />
        ))}
      </Container>
    </Wrapper>
  )
}