import { Container, Item } from './styles'
import React, { useState } from 'react'
import { Modal } from '../'
import Link from 'next/link'

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
        <Item onClick={() => handleClick(modal)}>About Me</Item>
        <Link href="/" passHref>
          <Item>Download PDF resume</Item>
        </Link>
      </Container>
      {modal && <Modal modalState={modal} onClick={handleClick} />}
    </>
  )
}