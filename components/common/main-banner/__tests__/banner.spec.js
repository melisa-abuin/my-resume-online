import { shallow, mount } from 'enzyme'
import MainBanner from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

describe('main banner', () => {
  it('main banner renders correctly', () => {
    const banner = shallow(<MainBanner />)
    expect(banner).toMatchSnapshot()
    
  })
  
  it('main banner renders theme correctly', () => {
    const banner = mount(<MainBanner />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(banner).toMatchSnapshot()
  })
})
