import { mount, shallow } from 'enzyme'
import Modal from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'
import { Button } from '../..'
import { Icon } from '../styles'

const dummyData = {
  title: 'some title',
  onClick: jest.fn(),
  body: 'some body text'
}

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))


describe('Modal', () => {

  it('modal without modalState', () => {
    const modal = shallow(<Modal {...dummyData} />)
    expect(modal.instance()).toBeNull()

  })

  it('modal renders theme correctly', () => {
    const modal = mount(<Modal {...dummyData} modalState />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(modal).toMatchSnapshot()

  })

  it('onClick method for button', () => {
    const modal = mount(<Modal {...dummyData} modalState />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    modal.find(Button).simulate('click');

    expect(dummyData.onClick).toHaveBeenCalled()
  })

  it('onClick method for icon', () => {
    const modal = mount(<Modal {...dummyData} modalState />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    modal.find(Icon).simulate('click');

    expect(dummyData.onClick).toHaveBeenCalled()
  })
})