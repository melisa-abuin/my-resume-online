import { shallow } from 'enzyme'
import Footer from '..'

test('footer renders correctly', () => {
  const footer = shallow(<Footer />)
  expect(footer).toMatchSnapshot()
});