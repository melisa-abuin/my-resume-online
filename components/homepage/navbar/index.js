import { Container, Link } from './styles'
import React from 'react'

export default function Navbar() {
  return (
    <Container>
      <Link href="/resume-abuin-melisa.pdf" target="_blank" download >Download PDF resume</Link>
    </Container>
  )
}