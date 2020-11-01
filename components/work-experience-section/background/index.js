import { Container, Image,  Wrapper, Group } from './styles'
import { JobDescription } from '..'
import React from 'react'


const jobs = [
  { 
    title: 'jobs.jpmorgan-title', 
    description: 'jobs.jpmorgan-description'
  },
  { 
    title: 'jobs.valtech-title', 
    description: 'jobs.valtech-description' 
  },
  { 
    title: 'jobs.gyl-title', 
    description: 'jobs.gyl-description'
  }
]

const Background = () => {

  return (
    <Wrapper>
      <Container>
      <Image src="/coding-image.jpg" />
      <Group>
        {jobs.map((item, index) => (
          <JobDescription key={index} {...item} additionalMargin={index*56} />
        ))}
        </Group>
    </Container> 
    </Wrapper>
  )
}

export default Background