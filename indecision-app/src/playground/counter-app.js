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