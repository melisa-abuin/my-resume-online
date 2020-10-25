import { shallow, mount } from 'enzyme'
import Summary from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

describe('Summary', () => {
  it('summary renders correctly', () => {
    const summary = shallow(<Summary />)
    expect(summary).toMatchSnapshot()
    
  })

  it('summary renders theme correctly', () => {
    const summary = mount(<Summary />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(summary).toMatchSnapshot()
  })
})
