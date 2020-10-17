import { Container, Image,  Wrapper, Group } from './styles'
import { JobDescription } from '..'
import React from 'react'


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