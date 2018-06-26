// Object desturcturing

// const person = {
//     name: 'Zach',
//     age: 26,
//     location: {
//         city: 'Union City',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && typeof temperature === 'number') {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// Array desturcturing

const address = ['4122 Venus Place', 'Union City', 'California', '94587'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}`) 