import { Body, Container, Header, Icon, Title } from './styles'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function Dropdown({ title, children }) {
  const [ dropdown, setDropdown ] = useState(false)

    return (
      <Container>
        <Header onClick={() => setDropdown(!dropdown)}>
          <Icon />
          <Title>title</Title>
        </Header>
        {dropdown && <Body>information</Body>}
      </Container>
    )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}