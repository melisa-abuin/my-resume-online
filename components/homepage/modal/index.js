import PropTypes from 'prop-types'
import { Button, Container, Content, Header, Icon, PageContainer, Title } from './styles'

const Modal = ({ onClick, modalState }) => {

  function closeModal(event) {
    onClick(event)
  }

  if(!modalState){
    return null
  }
  return (
    <PageContainer>
      <Container>
        <Header>
          <Title>About Me</Title>
          <Icon src="/cross-icon.png" onClick={() => closeModal(modalState)} />
        </Header>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </Content>
        <Button onClick={() => closeModal(modalState)}>
          Close
        </Button>
      </Container>
    </PageContainer>
  )
}

export default Modal

Modal.propTypes = {
  modalState: PropTypes.bool,
  onClick: PropTypes.func
}