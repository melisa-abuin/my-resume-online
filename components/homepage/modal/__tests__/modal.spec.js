import { shallow } from 'enzyme'
import Modal from '..'

test('banner renders correctly', () => {
  const modal = shallow(<Modal />)
  expect(modal).toMatchSnapshot()
});