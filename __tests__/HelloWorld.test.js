import HelloWorld from '../components/HelloWorld';
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

test('HellWorld component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HelloWorld />, div);
});


it('renders a snapshot', () => {
    const tree = renderer.create(<HelloWorld />).toJSON();
    expect(tree).toMatchSnapshot();
})