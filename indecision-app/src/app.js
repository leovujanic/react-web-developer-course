class IndecisionApp extends React.Component {

	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);

		this.state = {
			options: props.options,
		};
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options) {
				this.setState(() => ({
					options,
				}));
			}
		} catch (e) {
			// do nothing
		}

	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}

	componentWillUnmount() {
		console.log('Component will unmount');
	}

	handleDeleteOptions() {
		this.setState(() => ({
			options: [],
		}));
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}

	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value to add item';
		}
		if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}

		this.setState((prevState) => ({
			options: prevState.options.concat(option)
		}));
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			}),
		}));
	}

	render() {
		const subTitle = 'Put your life in the hands of a computer';

		return (
			<div>
				<Header subTitle={subTitle}/>
				<Action
					handlePick={this.handlePick}
					hasOptions={this.state.options.length > 0}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
			</div>
		)
	};
}

IndecisionApp.defaultProps = {
	options: []
};

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subTitle && <h2>{props.subTitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'My Indecision App',
};


const Action = (props) => {
	return (
		<div>
			<button
				onClick={props.handlePick}
				disabled={!props.hasOptions}
			>
				What should I do?
			</button>
		</div>
	);
};

class Options extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.handleDeleteOptions}>Remove All</button>
				{this.props.options.length === 0 && <p>Please add an option to get started</p>}
				{
					this.props.options.map((option) => (
						<Option
							key={option}
							optionText={option}
							handleDeleteOption={this.props.handleDeleteOption}
						/>
					))
				}
			</div>
		);
	}
}

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button onClick={(e) => {
				props.handleDeleteOption(props.optionText)
			}}>
				X
			</button>
		</div>
	);
};

class AddOption extends React.Component {

	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined,
		};
	}

	handleAddOption(e) {
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
	}

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

ReactDOM.render(
	<IndecisionApp/>,
	document.getElementById('app')
);