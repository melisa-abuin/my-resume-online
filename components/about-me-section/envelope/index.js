import { Container, Information, Paragraph, Paper, Section, Shape, Title, Wrapper } from './styles'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../common'
/**
 *         <Information>
          <Title>Hi! I'm Melisa</Title>
          <Paragraph>Let me introduce myself:</Paragraph>
          <Button onClick={() => setLetter({ letter: letter, animation: true })} >{letter ? "hide letter": "show letter"}</Button>
        </Information>
 */

export default function Envelope() {
  const { t } = useTranslation('common')
  const [ { letter, animation }, setLetter ] = useState({ letter: false, animation: false })
  
  return (
    <>
      <Information>
        <Title>Hi! I'm Melisa</Title>
        <Paragraph>Let me introduce myself:</Paragraph>
        <Button onClick={() => setLetter({ letter: letter, animation: true })} >{letter ? "hide letter": "show letter"}</Button>
      </Information>    <Section>
      <Wrapper>
        <Container showLetter={letter} animation={animation}>
          <Shape /> 
          <Paper showLetter={letter} animation={animation} onAnimationEnd={() => setLetter({ letter: !letter, animation: false})}>
            <Title>Hi! I'm Melisa</Title>
            <Paragraph> I am a Front-end developer skilled in React. As an almost graduated student with 3 years of experience 
  in software developement I'm an ambitious person who has developed a responsible approach to any task that I 
  undertake or any situation that I'm presented with. I have strong technical skills as well as excellent interpersonal 
  skills, enabling me to interact with a wide range of clients</Paragraph>
          </Paper>
        </Container>
      </Wrapper>
    </Section>
    </>
  )
}

