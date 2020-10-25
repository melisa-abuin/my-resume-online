import { shallow, mount } from 'enzyme'
import Thumbnail from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

describe('Thumbnail', () => {
  it('thumbnail renders correctly', () => {
    const thumbnail = shallow(<Thumbnail />)
    expect(thumbnail).toMatchSnapshot()
    
  })

  it('thumbnail renders theme correctly', () => {
    const thumbnail = mount(<Thumbnail />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(thumbnail).toMatchSnapshot()
  })
})
