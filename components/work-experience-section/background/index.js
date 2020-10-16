import { Container, Wrapper } from './styles'
import { Dropdown } from '..'


const jobs = [
  { 
    title: 'jobs.jpmorgan-title', 
    description: 'jobs.jpmorgan-description',
    tags: []
  },
  { 
    title: 'jobs.valtech-title', 
    description: 'jobs.valtech-description' ,
    tags: []
  },
  { 
    title: 'jobs.gyl-title', 
    description: 'jobs.gyl-description',
    tags: []
  }
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