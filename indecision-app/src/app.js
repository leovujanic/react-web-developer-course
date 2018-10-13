const app = {
	title: 'Indecision App',
	subTitle: 'What should I do?',
	options: [],
};

// root element
const appRoot = document.getElementById('app');


const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subTitle && <p>{app.subTitle}</p>}
			<p>{app.options.length ? 'Here are your options:' : 'No options'}</p>
			<button onClick={clearList}>Remove all</button>
			<ol>
				{
					app.options.map((option) => {
						return (
							<li key={option}>{option}</li>
						);
					})
					// shorthand
					// app.options.map((option) => <li key={option}>{option}</li>)
				}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

const clearList = (e) => {
	app.options = [];
	render();
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const optionEl = e.target.elements.option;
	const optionValue = optionEl.value;

	if (optionValue) {
		app.options.push(optionValue);
		optionEl.value = '';
		render();
	}
};


// initialize app
render();





