import { shallow } from 'enzyme'
import JobDescription from '..'

describe('jobDescription', () => {
it('jobDescription renders correctly', () => {
    const jobDescription = shallow(<JobDescription />)
    expect(jobDescription).toMatchSnapshot()
  })
})
