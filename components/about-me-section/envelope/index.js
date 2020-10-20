import { Container, Information,  Paper, Section, Shape, Title } from './styles'
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
        <Title>About me</Title>
        <Button onClick={() => setLetter(!letter)} >show letter</Button>
      </Information>
      <Container>
        <Shape />
        <Paper>About meeeee</Paper>
      </Container>
    </Section>
  )
}

