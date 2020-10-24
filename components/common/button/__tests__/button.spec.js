import { shallow } from 'enzyme'
import Button from '..'

describe('Button', () => {
  it('button renders correctly', () => {
    const dummyText = 'text'
    const button = shallow(<Button text="text">{dummyText}</Button>)
    expect(button).toMatchSnapshot()
  })
})
