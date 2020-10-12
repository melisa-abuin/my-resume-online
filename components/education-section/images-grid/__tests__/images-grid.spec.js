import { shallow } from 'enzyme'
import ImagesGrid from '..'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

test('imagesGrid renders correctly', () => {
  const imagesGrid = shallow(<ImagesGrid />)
  expect(imagesGrid).toMatchSnapshot()
})
