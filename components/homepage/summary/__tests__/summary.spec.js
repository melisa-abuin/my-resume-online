import { shallow } from 'enzyme'
import Summary from '..'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

test('summary renders correctly', () => {
  const summary = shallow(<Summary />)
  expect(summary).toMatchSnapshot()
});