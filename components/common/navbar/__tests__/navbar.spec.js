import { shallow, mount } from 'enzyme'
import Navbar from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

describe('Navbar', () => {
  it('navbar renders correctly', () => {
    const navbar = shallow(<Navbar />)
    expect(navbar).toMatchSnapshot()
    
  })
  
  it('navbar renders theme correctly', () => {
    const navbar = mount(<Navbar />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(navbar).toMatchSnapshot()
  })
})
