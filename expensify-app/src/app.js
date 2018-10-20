import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
	<div>
		<p>This is from My Dashboard component</p>
	</div>
);


const AddExpensePage = () => (
	<div>
		<p>This is from Add Expense page</p>
	</div>
);

const EditExpensePage = () => (
	<div>
		<p>This is from Edit Expense page</p>
	</div>
);


const HelpPage = () => (
	<div>
		<p>This is from Add Expense page</p>
	</div>
);


const NotFoundPage = () => (
	<div>
		<p>404!</p>
	</div>
);


const routes = (
	<BrowserRouter>
		<Switch>
			<Route path="/" component={ExpenseDashboardPage} exact={true}/>
			<Route path="/create" component={AddExpensePage}/>
			<Route path="/edit" component={EditExpensePage}/>
			<Route path="/help" component={HelpPage}/>
			<Route component={NotFoundPage}/>
		</Switch>
	</BrowserRouter>
);


const appRoot = document.getElementById('app');

ReactDOM.render(
	routes,
	appRoot
);