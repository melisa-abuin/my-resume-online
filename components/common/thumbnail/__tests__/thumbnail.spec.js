import { shallow } from 'enzyme'
import Thumbnail from '..'

test('thumbnail renders correctly', () => {
  const thumbnail = shallow(<Thumbnail />)
  expect(thumbnail).toMatchSnapshot()
});