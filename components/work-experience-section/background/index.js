import { Container, Line, Wrapper } from './styles'
import { Dropdown } from '..'
import React, { useState } from 'react'


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
 /**<Container>
        {jobs.map((item, index) => (
          <Dropdown key={index} {...item} />
        ))}
    </Container> */



export default function Background() {
  const [animation, setAnimation] = useState(0)
  console.log(animation)  
  return (
    <Wrapper>
      <Line top={60} delay={0.9} animation={animation} onAnimationEnd={() => setAnimation(0)} />
      <Line top={70} delay={0.7} animation={animation} />
      <Line top={80} delay={1} animation={animation}/>
      
      <Container onClick={() => setAnimation(1)}>
        {jobs.map((item, index) => (
          <Dropdown key={index} {...item} />
        ))}
    </Container> 

    <Line bottom={60} delay={0.9} animation={animation} />
      <Line bottom={70} delay={0.7} animation={animation} />
      <Line bottom={80} delay={1} animation={animation}/>
    </Wrapper>
  )
}