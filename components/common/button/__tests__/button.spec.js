import { shallow, mount } from 'enzyme'
import Button from '..'
import { StyledButton } from '../styles'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

const dummyText = 'text'
const onClick =  jest.fn()

describe('Button', () => {
  it('button renders correctly', () => {
    
    const button = shallow(<Button text="text">{dummyText}</Button>)
    expect(button).toMatchSnapshot()
  })

  it('button renders theme correctly', () => {
    const button = mount(<Button text="text">{dummyText}</Button>, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
  })

  it('onClick method', () => {
    const button = mount(<Button text="text" onClick={onClick}>{dummyText}</Button>, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    button.find(StyledButton).simulate('click');

    expect(onClick).toHaveBeenCalled()
  })
})
