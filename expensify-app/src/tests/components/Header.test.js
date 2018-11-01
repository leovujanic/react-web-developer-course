import React from 'react';
import Header from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow'
import filterReducers from "../../reducers/filters";
import moment from "moment";

test('Should render header correctly', () => {
	const renderer = new ReactShallowRenderer();
	renderer.render(<Header/>);
	expect(renderer.getRenderOutput()).toMatchSnapshot();
});