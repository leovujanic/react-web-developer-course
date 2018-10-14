const User = (props) => {
	return (
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	)
};

ReactDOM.render(
	<User name="Leo" age={30} />,
	document.getElementById('app')
);