import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('Should test default state', () => {
	const state = expensesReducer(undefined, {type: '@@INIT'});
	expect(state).toEqual([]);
});


test('Should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([
		expenses[0],
		expenses[2],
	]);
});

test('Should not remove expense if id not found', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});


test('Should add expense', () => {
	const expense = {
		id: '10',
		description: 'Test',
		note: '',
		amount: 300,
		createdAt: 1000,
	};

	const action = {
		type: 'ADD_EXPENSE',
		expense,
	};

	const state = expensesReducer(expenses, action);
	expect(state).toEqual([
		...expenses,
		expense
	]);
});


test('Should edit an expense', () => {
	const amount = 12200;
	const action = {
		type: 'EDIT_EXPENSE',
		id: expenses[1].id,
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].amount).toEqual(amount);
});

test('Should not edit expense if id not found', () => {
	const amount = 12200;
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});
