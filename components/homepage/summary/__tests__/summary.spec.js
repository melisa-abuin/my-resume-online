import { shallow } from 'enzyme'
import Summary from '..'

test('summary renders correctly', () => {
  const summary = shallow(<Summary />)
  expect(summary).toMatchSnapshot()
});