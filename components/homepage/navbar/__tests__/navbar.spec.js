import { shallow } from 'enzyme'
import Navbar from '..'

test('navbar renders correctly', () => {
  const navbar = shallow(<Navbar />)
  expect(navbar).toMatchSnapshot()
});