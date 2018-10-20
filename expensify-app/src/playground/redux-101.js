import {createStore} from 'redux';


const store = createStore((state = {count: 0}, action) => {
	console.log('running');
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + 1,
			};
		case 'DECREMET':
			return {
				count: state.count - 1,
			};
		case 'RESET':
			return {
				count: 0,
			};
		default:
			return state
	}
});


const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({
	type: 'INCREMENT'
});

unsubscribe();

store.dispatch({
	type: 'INCREMENT'
});

store.dispatch({
	type: 'DECREMET'
});

store.dispatch({
	type: 'RESET'
});