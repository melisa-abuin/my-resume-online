import { shallow } from 'enzyme'
import Arrow from '..'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

test('arrow renders correctly', () => {
  const arrow = shallow(<Arrow />)
  expect(arrow).toMatchSnapshot()
})
