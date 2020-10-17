import { Container, Image,  Wrapper, DropdownGroup } from './styles'
import { Dropdown } from '..'
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
      <DropdownGroup>
        {jobs.map((item, index) => (
          <Dropdown key={index} {...item} additionalMargin={index*56} />
        ))}
        </DropdownGroup>
    </Container> 


    </Wrapper>
  )
}