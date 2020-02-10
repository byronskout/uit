import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';
import { italic } from 'ansi-colors';


it('it should render without errors', () => {
    const component = shallow(<Header />);
    const wrapper = component.find('.headerComponent');
    expect(wrapper.length).toBe(1);
});