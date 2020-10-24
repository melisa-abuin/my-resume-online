import { StyledButton } from './styles'
import PropTypes from 'prop-types'

export default function Button({ children, onClick }) {

  function hadleClick() {
    onClick()
  }

  return (
    <StyledButton onClick={() => hadleClick()}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired
}
