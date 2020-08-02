import { Container, Item } from './styles'
import React, { useState } from 'react'
import { Modal } from '../'
import Link from 'next/link'

export default function Navbar() {
  const [ modal, setModal ] = useState(0)

  function handleClick(modal) {
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