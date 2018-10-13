
class Counter extends React.Component {
	handleAddOne() {
		console.log('Plus one');

	}

	handleMinusOne() {

	}

	handleReset() {

	}

	render() {
		return (
			<div>
				<h1>Count: 0</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		)
	}
}

ReactDOM.render(
	<Counter/>,
	document.getElementById('app')
);