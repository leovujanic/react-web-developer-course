const app = {
	title: 'Indecision App',
	subTitle: 'What should I do?',
	options: [
		'One',
		'Two',
	]
};

// root element
const appRoot = document.getElementById('app');


const template = (
	<div>
		<h1>{app.title}</h1>
		{app.subTitle && <p>{app.subTitle}</p>}
		<p>{app.options.length ? 'Here are your options:' : 'No options'}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

ReactDOM.render(template, appRoot);


