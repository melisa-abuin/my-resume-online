import { Body, Container, Header, Icon, Line, Title } from './styles'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export default function Dropdown({ title, description, additionalMargin }) {
  const [ dropdown, setDropdown ] = useState(false)
  const { t } = useTranslation('common')
console.log(additionalMargin)
  return (
    <Container additionalMargin={additionalMargin}>
      <Header onClick={() => setDropdown(!dropdown)}>
        <Icon src='/html-icon.png' />
        <Title>{t(title)}</Title>
        <Line animation={dropdown} />
      </Header>
      <Body visible={dropdown}>{t(description)}</Body>
    </Container>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  additionalMargin: PropTypes.number
}