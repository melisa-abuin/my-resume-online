import { shallow } from 'enzyme'
import MainBanner from '..'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

test('banner renders correctly', () => {
  const banner = shallow(<MainBanner />)
  expect(banner).toMatchSnapshot()
})