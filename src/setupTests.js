import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-reacter-16';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})