import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
	type: 'INCREMENT',
	incrementBy,
});


const decrementCount = ({decrementBy = 1} = {}) => ({
	type: 'DECREMET',
	decrementBy,
});

const resetCount = () => ({
	type: 'RESET',
});

const setCount = ({count}) => ({
	type: 'SET',
	count,
});

/**
 * Reducers
 *
 * 1. Reducers are pure functions
 * 2. Never change state or action
 */

const countReducer = (state = {count: 0}, action) => {
	console.log('running');
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy,
			};
		case 'DECREMET':
			return {
				count: state.count - action.decrementBy,
			};
		case 'RESET':
			return {
				count: 0,
			};
		case 'SET':
			return {
				count: action.count,
			};
		default:
			return state
	}
};

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 1}));
store.dispatch(decrementCount({decrementBy: 2}));

store.dispatch(resetCount());

store.dispatch(setCount({count: 101}));


