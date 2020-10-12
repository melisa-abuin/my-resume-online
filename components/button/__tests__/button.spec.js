import { shallow, mount } from 'enzyme'
import Button from '..'
import theme from '../../../theme'
import 'jest-styled-components'
import { ThemeProvider } from "styled-components"
import renderer from 'react-test-renderer'

describe('Button', () => {
  it('button renders correctly', () => {
    const button = shallow(<Button theme={theme} />)
    expect(button).toMatchSnapshot()
  })
})
