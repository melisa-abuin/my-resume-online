import { shallow, mount } from 'enzyme'
import Background from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

describe('Background', () => {
  it('background renders correctly', () => {
    const background = shallow(<Background />)
    expect(background).toMatchSnapshot()
    
  })

  it('background renders theme correctly', () => {
    const background = mount(<Background />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(background).toMatchSnapshot()
  })
})
