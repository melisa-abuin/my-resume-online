import { Container, Information, Paragraph, Paper, Section, Shape, Title } from './styles'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../common'


export default function Envelope() {
  const { t } = useTranslation('common')
  const [ letter, setLetter ] = useState(false)  
console.log(letter)
  return (
    <Section>
      <Information>
        <Title>Hi! I'm Melisa</Title>
        <Paragraph>Let me introduce myself:</Paragraph>
        <Button onClick={() => setLetter(!letter)} >{letter ? "hide letter": "show letter"}</Button>
      </Information>
      <Container>
        <Shape />
        <Paper showLetter={letter} >About meeeee</Paper>
      </Container>
    </Section>
  )
}

