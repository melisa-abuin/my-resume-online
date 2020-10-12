import { shallow } from 'enzyme'
import Arrow from '..'

test('arrow renders correctly', () => {
  const arrow = shallow(<Arrow />)
  expect(arrow).toMatchSnapshot()
});