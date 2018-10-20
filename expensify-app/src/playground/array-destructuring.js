const address = [
	'Ulica Junaka 10',
	'Zagreb',
	'Croatia',
	'10000'
];


console.log(`You are in ${address[1]}, ${address[2]}`);


// basic example
const [street, city, state, zip] = address;
console.log(`You are in ${city}, ${state}`);


// exclude some elements
const [, city1, state1] = address;
console.log(`You are in ${city1}, ${state1}`);


// set defaults
const [, city2 = 'New York'] = [];
console.log(`You are in ${city2}`);