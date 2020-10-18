import { Wrapper } from './styles'
import PropTypes from 'prop-types'

export default function PageSection({ className, children }) {
    return (
      <Wrapper className={className} >
          {children}
      </Wrapper>
      
    )
}

PageSection.propTypes = {
  children: PropTypes.node.isRequired
}
