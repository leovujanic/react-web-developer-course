import React from 'react';
import connect from "react-redux/es/connect/connect";

import {removeExpense} from '../actions/expenses'


const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
	<div>
		<h2>{description}</h2>
		<p>{amount} - {createdAt}</p>
		<button onClick={() => {
			dispatch(removeExpense({id}));
		}}>X
		</button>
	</div>
);

export default connect()(ExpenseListItem);