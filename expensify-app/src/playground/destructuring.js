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

if (person.location.temp && person.location.city) {
	console.log(`It's ${person.location.temp} in ${person.location.city}`);
}


const {city, temp} = person.location;

if (temp && city) {
	console.log(`It's ${temp} in ${city}`);
}

// naming
const {city: personCity, temp: temperature} = person.location;

if (temperature && personCity) {
	console.log(`It's ${temperature} in ${personCity}`);
}

// default value
const {nameFoo: userName = 'Default'} = person;
console.log(`It's ${userName}`);