import filterReducers from '../../reducers/filters'
import moment from "moment";


test('Should setUp default filter values', () => {
	const state = filterReducers(undefined, '@@INIT');
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month'),
	})
});


test('Should set sortBy to amount', () => {
	const state = filterReducers(undefined, {type: 'SORT_BY_AMOUNT'});
	expect(state.sortBy).toBe('amount')
});

test('Should set sortBy to date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: undefined,
		endDate: undefined,
	};
	const action = {type: 'SORT_BY_DATE'};
	const state = filterReducers(undefined, action);
	expect(state.sortBy).toBe('date')
});

test('Should set text filter', () => {
	const action = {
		type: 'SET_TEXT_FILTER',
		text: 'test'
	};
	const state = filterReducers(undefined, action);
	expect(state.text).toBe('test')
});

test('Should set startDate filter', () => {
	const startDate = moment(0);
	const action = {
		type: 'SET_START_DATE',
		startDate
	};
	const state = filterReducers(undefined, action);
	expect(state.startDate).toBe(startDate)
});

test('Should set endDate filter', () => {
	const endDate = moment(0);
	const action = {
		type: 'SET_END_DATE',
		endDate
	};
	const state = filterReducers(undefined, action);
	expect(state.endDate).toBe(endDate)
});