import { StyledButton } from './styles'
import PropTypes from 'prop-types'

const Button = ({ children, onClick }) => {

  const hadleClick = () => {
    onClick()
  }

  return (
    <StyledButton onClick={() => hadleClick()}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button