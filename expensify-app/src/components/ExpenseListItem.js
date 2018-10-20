import React from 'react';
import connect from "react-redux/es/connect/connect";
import {Link} from 'react-router-dom';


const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h2>{description}</h2>
		</Link>
		<p>{amount} - {createdAt}</p>
	</div>
);

export default connect()(ExpenseListItem);