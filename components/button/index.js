import { StyledButton } from './styles'
import PropTypes from 'prop-types'

export default function Button(text) {
    return (
      <StyledButton>
        {text}
      </StyledButton>
    )
}

Button.propTypes = {
  text: PropTypes.string
}
