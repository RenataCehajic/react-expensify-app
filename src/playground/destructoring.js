// Object desctructoring

// const person = {
//     name: 'Renata',
//     age: 35,
//     location: {
//         city: 'Amsterdam',
//         temp: 3
//     }
// }; 

// const { name, age } = person; 

// const name = person.name;
// const age = person.age; 

// console.log(`${name} is ${age}.`);

// Array destructoring 

const address = ['1299 S Juniper Street', 'Amsterdam', 'Netherlands', '1019CV']; 

const [, city, state, zip] = address; 

console.log(`You are in ${city} ${state}.`); 