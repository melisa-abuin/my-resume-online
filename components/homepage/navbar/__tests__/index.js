import { shallow } from 'enzyme';
import Navbar from '../index'

describe('<Navbar />', () => {
  it('renders an Item and a Link', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.equals(modal)).to.equal(false);
  })
});