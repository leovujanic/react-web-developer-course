import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseForm } from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
	const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
	expect(wrapper).toMatchSnapshot();
});
