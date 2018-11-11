

const user = {
	name: 'kmek',
	age: 20,
};

// clone
console.log({
	...user
});

// add and overwrite props
console.log({
	...user,
	location: 'Zagreb',
	age: 32,
});

