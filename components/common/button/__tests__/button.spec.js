import { shallow } from 'enzyme'
import Button from '..'

describe('Button', () => {
  it('button renders correctly', () => {
    const button = shallow(<Button text="text" />)
    expect(button).toMatchSnapshot()
  })
})
