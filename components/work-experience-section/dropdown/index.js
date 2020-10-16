import { Body, Container, Header, Icon, Title } from './styles'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export default function Dropdown({ title, description }) {
  const [ dropdown, setDropdown ] = useState(false)
  const { t } = useTranslation('common')

  return (
    <Container>
      <Header onClick={() => setDropdown(!dropdown)}>
        <Icon src={dropdown ? '/minus-icon.png' : '/plus-icon.png'} />
        <Title>{t(title)}</Title>
      </Header>
      {dropdown && <Body>{t(description)}</Body>}
    </Container>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}