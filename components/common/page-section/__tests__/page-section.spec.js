import { shallow } from 'enzyme'
import PageSection from '..'

describe('PageSection', () => {
  it('pageSection renders correctly', () => {
    const dummyClass = 'someClassName'
    const dummyText = 'someText'
    
    const pageSection = shallow(<PageSection className={dummyClass}>{dummyText}</PageSection>)
    expect(pageSection).toMatchSnapshot()
  })
})
