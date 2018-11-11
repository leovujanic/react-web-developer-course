import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter"
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({
	description: 'Rent',
	amount: 100,
	createdAt: 100,
}));
store.dispatch(addExpense({
	description: 'Coffe',
	amount: 300,
	createdAt: 200,
}));

store.dispatch(addExpense({
	description: 'Gas',
	amount: 50,
	createdAt: 500,
}));


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