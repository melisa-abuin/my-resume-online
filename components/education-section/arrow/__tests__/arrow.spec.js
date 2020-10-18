import { shallow, mount } from 'enzyme'
import Arrow from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'


jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

describe('arrow', () => {
  it('arrow renders correctly', () => {
    const arrow = shallow(<Arrow />)
    expect(arrow).toMatchSnapshot()
    
  })

  it('arrow renders theme correctly', () => {
    const arrow = mount(<Arrow />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(arrow).toMatchSnapshot()
  })
})
