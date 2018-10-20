import React from 'react';
import {connect} from 'react-redux';


const ExpenseList = (props) => (
	<div>
		<h1>From Expense List</h1>
		{props.expenses.length}
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: state.expenses,
	}
};

export default connect(mapStateToProps)(ExpenseList);