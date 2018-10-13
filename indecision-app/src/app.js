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

// counter app

let cnt = 0;

const incrementOne = () => {
	cnt += 1;
	renderCounterApp();
};

const decrementOne = () => {
	cnt -= 1;
	renderCounterApp();
};

const resetCnt = () => {
	cnt = 0;
	renderCounterApp();
};

const renderCounterApp = () => {
	const counterTemplate = (
		<div>
			<h1>Count: {cnt}</h1>
			<button onClick={incrementOne}>+1</button>
			<button onClick={decrementOne}>-1</button>
			<button onClick={resetCnt}>Reset</button>
		</div>
	);
	ReactDOM.render(counterTemplate, appRoot);
};

renderCounterApp();

