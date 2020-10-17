import { shallow, mount } from 'enzyme'
import Gallery from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

describe('gallery', () => {
it('gallery renders correctly', () => {
    const gallery = shallow(<Gallery />)
    expect(gallery).toMatchSnapshot()
  })

  it('gallery renders theme correctly', () => {
    const gallery = mount(<Gallery />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(gallery).toMatchSnapshot()
  })
})
