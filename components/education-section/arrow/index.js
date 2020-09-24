import { Image, Indicator, Swipper } from './styles'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

export default function Arrow({ onClick, right }) {
  const { t } = useTranslation('common')

  return (
    <Swipper right={right} onClick={onClick}>
      <Image right={right} src='/chevron-shape.png' />
      <Indicator>{right ? t("general.next") : t("general.previous")}</Indicator>
    </Swipper>
  )
}

Arrow.propTypes = {
  onClick: PropTypes.func,
  right: PropTypes.bool
}

