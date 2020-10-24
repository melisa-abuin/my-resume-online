import { Body, Container, Header, Icon, Title } from './styles'
import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

const JobDescription = ({ title, description, additionalMargin }) => {
  const { t } = useTranslation('common')

  return (
    <Container additionalMargin={additionalMargin}>
      <Header>
        <Icon src='/html-icon.png' />
        <Title>{t(title)}</Title>
      </Header>
      <Body >{t(description)}</Body>
    </Container>
  )
}

JobDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  additionalMargin: PropTypes.number
}

export default JobDescription