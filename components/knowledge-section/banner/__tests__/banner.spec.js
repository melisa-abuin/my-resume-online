import { shallow } from 'enzyme'
import Banner from '..'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

test('banner renders correctly', () => {
  const banner = shallow(<Banner />)
  expect(banner).toMatchSnapshot()
})