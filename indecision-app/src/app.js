class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision App';
		const subTitle = 'Put your life in the hands of a computer';
		const options = [
			'Thing one',
			'Thing two',
			'Thing three',
		];

		return (
			<div>
				<Header title={title} subTitle={subTitle}/>
				<Action/>
				<Options options={options}/>
				<AddOption/>
			</div>
		)
	};
}

class Header extends React.Component {

	render() {
		console.log(this.props);
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subTitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	handlePick() {

	}

	render() {
		return (
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		);
	}
}


class RemoveAllOptions extends React.Component {
	handleRemoveAll() {
		console.log('Remove All');
	}

	render() {
		return (
			<button onClick={this.handleRemoveAll}>Remove All</button>
		)
	}
}


class Options extends React.Component {
	render() {
		return (
			<div>
				<RemoveAllOptions/>
				{
					this.props.options.map((option) => <Option key={option} optionText={option}/>)
				}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.optionText}
			</div>
		);
	}
}

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.handleAddOption = this.handleAddOption.bind(this);
	}

	handleAddOption(e) {
		e.preventDefault();

		const optionEl = e.target.elements.option;
		const optionValue = optionEl.value.trim();

		if (optionValue) {
			optionEl.value = '';
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}


ReactDOM.render(
	<IndecisionApp/>,
	document.getElementById('app')
);