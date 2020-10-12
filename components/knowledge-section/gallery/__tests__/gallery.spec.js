import { shallow } from 'enzyme'
import Gallery from '..'

test('gallery renders correctly', () => {
  const gallery = shallow(<Gallery />)
  expect(gallery).toMatchSnapshot()
});