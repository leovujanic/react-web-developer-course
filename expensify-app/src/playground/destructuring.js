const person = {
	name: 'Leo',
	age: '30',
	location: {
		city: 'Zagreb',
		temp: 18,
	},
};


console.log(`${person.name} is ${person.age}.`);


const {name, age} = person;


console.log(`${name} is ${age}.`);