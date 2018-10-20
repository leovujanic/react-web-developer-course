import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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
		<p>This is from Help page</p>
	</div>
);


const NotFoundPage = () => (
	<div>
		<p>
			404!
			<Link to="/">Go Home</Link>
		</p>
	</div>
);

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
		<NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
		<NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
		<NavLink to="/help" activeClassName="is-active">Help</NavLink>
	</header>
);


const routes = (
	<BrowserRouter>
		<div>
			<Header/>
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true}/>
				<Route path="/create" component={AddExpensePage}/>
				<Route path="/edit" component={EditExpensePage}/>
				<Route path="/help" component={HelpPage}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</BrowserRouter>
);


const appRoot = document.getElementById('app');

ReactDOM.render(
	routes,
	appRoot
);