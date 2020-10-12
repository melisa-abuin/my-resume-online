import { shallow } from 'enzyme'
import Banner from '..'

test('banner renders correctly', () => {
  const banner = shallow(<Banner />)
  expect(banner).toMatchSnapshot()
});