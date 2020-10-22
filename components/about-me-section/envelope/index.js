import { Container, Information, Paragraph, Paper, Section, Shape, Title, Wrapper } from './styles'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../common'


export default function Envelope() {
  const { t } = useTranslation('common')
  const [ { letter, animation }, setLetter ] = useState({ letter: true, animation: false })
  
  return (
    <Section>
      <Wrapper>
        <Information>
          <Title>Hi! I'm Melisa</Title>
          <Paragraph>Let me introduce myself:</Paragraph>
          <Button onClick={() => setLetter({ letter: letter, animation: true })} >{letter ? "hide letter": "show letter"}</Button>
        </Information>
        <Container showLetter={letter} animation={animation}>
          <Shape /> 
          <Paper showLetter={letter} animation={animation} onAnimationEnd={() => setLetter({ letter: !letter, animation: false})}>
            <Paragraph>About me</Paragraph>
            <Paragraph> I am a Front-end developer skilled in React. As an almost graduated student with 3 years of experience 
  in software developement I'm an ambitious person who has developed a responsible approach to any task that i 
  undertake or any situation that I'm presented with. I have strong technical skills as well as excellent interpersonal 
  skills, enabling me to interact with a wide range of clients</Paragraph>
          </Paper>
        </Container>
      </Wrapper>
    </Section>
  )
}

