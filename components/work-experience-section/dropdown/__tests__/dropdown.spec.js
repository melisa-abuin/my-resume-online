import { shallow } from 'enzyme'
import Dropdown from '..'

describe('dropdown', () => {
it('dropdown renders correctly', () => {
    const dropdown = shallow(<Dropdown />)
    expect(dropdown).toMatchSnapshot()
  })
})
