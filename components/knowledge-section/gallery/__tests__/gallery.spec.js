import { shallow } from 'enzyme'
import Gallery from '..'

describe('gallery', () => {
it('gallery renders correctly', () => {
    const gallery = shallow(<Gallery />)
    expect(gallery).toMatchSnapshot()
  })
})
