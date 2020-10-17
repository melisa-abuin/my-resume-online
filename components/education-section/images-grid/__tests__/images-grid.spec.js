import { shallow, mount } from 'enzyme'
import ImagesGrid from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

describe('imagesGrid', () => {
  it('imagesGrid renders correctly', () => {
    const imagesGrid = shallow(<ImagesGrid />)
    expect(imagesGrid).toMatchSnapshot()
    
  })

  it('imagesGrid renders theme correctly', () => {
    const imagesGrid = mount(<ImagesGrid />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(imagesGrid).toMatchSnapshot()
  })
})

