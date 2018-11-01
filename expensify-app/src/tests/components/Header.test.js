import React from 'react';
import Header from '../../components/Header';
import toJosn from 'enzyme-to-json';
import {shallow} from 'enzyme';

// Old version
// import ReactShallowRenderer from 'react-test-renderer/shallow'
//
// test('Should render header correctly', () => {
// 	const renderer = new ReactShallowRenderer();
// 	renderer.render(<Header/>);
// 	expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

test('Should render header correctly', () => {
	const wrapper = shallow(<Header/>);

	expect(toJosn(wrapper)).toMatchSnapshot();
});