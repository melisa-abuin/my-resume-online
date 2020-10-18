import { shallow, mount } from 'enzyme'
import Footer from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

describe('footer', () => {
  it('footer renders correctly', () => {
    const footer = shallow(<Footer />)
    expect(footer).toMatchSnapshot()
    
  })

  it('footer renders theme correctly', () => {
    const footer = mount(<Footer />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(footer).toMatchSnapshot()
  })
})
