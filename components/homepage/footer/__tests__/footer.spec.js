import { shallow } from 'enzyme'
import Footer from '..'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

test('footer renders correctly', () => {
  const footer = shallow(<Footer />)
  expect(footer).toMatchSnapshot()
})