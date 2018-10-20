import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter"
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const store = configureStore();

const addExpenseOne = store.dispatch(addExpense({
	description: 'Rent',
	amount: 100,
	createdAt: 100,
}));

const addExpenseTwo = store.dispatch(addExpense({
	description: 'Coffe',
	amount: 300,
	createdAt: 200,
}));

setTimeout(() => {
	store.dispatch(setTextFilter('rent'));
}, 2000);

const appRoot = document.getElementById('app');

const jsx = (
	<Provider store={store}>
		<AppRouter/>
	</Provider>
);

ReactDOM.render(
	jsx,
	appRoot
);