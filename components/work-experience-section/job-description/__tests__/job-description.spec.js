import { shallow, mount } from 'enzyme'
import JobDescription from '..'
import { ThemeProvider } from "styled-components"
import theme from '../../../../theme'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: key => key})
}))

const dummyData = {
  title: 'some title',
  description: 'some description'
}

describe('jobDescription', () => {
it('jobDescription renders correctly', () => {
    const jobDescription = shallow(<JobDescription {...dummyData} />)
    expect(jobDescription).toMatchSnapshot()
  })

  it('jobDescription renders theme correctly', () => {
    const jobDescription = mount(<JobDescription {...dummyData} />, {
      wrappingComponent: ThemeProvider,
      wrappingComponentProps: {
        theme,
      },
    })
    expect(jobDescription).toMatchSnapshot()
  })
})
