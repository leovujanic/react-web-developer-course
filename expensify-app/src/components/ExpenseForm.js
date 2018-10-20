import React from 'react';
import moment from 'moment';

import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const now = moment();


export default class ExpenseForm extends React.Component {
	state = {
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		calendarFocused: false,
	};

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState({description})
	};

	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState({note})
	};

	onAmountChange = (e) => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState({amount})
		}
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({
				createdAt
			}))
		}
	};

	onFocusChange = ({focused}) => {
		this.setState(() => ({
			calendarFocused: focused,
		}))
	};

	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						type="text"
						placeholder="Amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
					/>

					<textarea
						value={this.state.note}
						onChange={this.onNoteChange}
						placeholder="Add a note for your expense (optional)"
					>
					</textarea>
					<button>Add expense</button>
				</form>
			</div>
		)
	}
};