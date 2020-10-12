import { shallow } from 'enzyme'
import Button from '..'

test('button renders correctly', () => {
  const button = shallow(<Button />)
  expect(button).toMatchSnapshot()
});