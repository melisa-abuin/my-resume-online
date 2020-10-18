import { Container, Link } from './styles'
import React, { useState } from 'react'
import { Modal } from '..'

export default function Navbar() {
  const [ modal, setModal ] = useState(false)

  function handleClick(modal) {
    const body = document.body
    modal ? body.classList.remove('no-scroll') :  body.classList.add('no-scroll') 
    setModal(!modal)
  }
  
  return (
    <>
      <Container>
        <Link href="/resume-abuin-melisa.pdf" target="_blank" download >Download PDF resume</Link>
      </Container>
      {modal && <Modal modalState={modal} onClick={handleClick} />}
    </>
  )
}