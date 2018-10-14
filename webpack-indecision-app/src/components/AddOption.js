import React from 'react';

export default class AddOption extends React.Component {

	state = {
		error: undefined,
	};

	handleAddOption = (e) => {
		e.preventDefault();

		const optionEl = e.target.elements.option;
		const optionValue = optionEl.value.trim();

		const error = this.props.handleAddOption(optionValue);

		this.setState(() => ({
			error,
		}));

		if (!error) {
			optionEl.value = '';
		}
	};

	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}
