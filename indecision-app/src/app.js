var template = (
	<div>
		<h1>
			This is JSX from app.js!!!
		</h1>
		<p>
			Hello p
		</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);