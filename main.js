// CONST & LET

let name = 'John';
let test;

name = 'Jack';

console.log(name);

const person = {
    name: 'John',
    age: 33
}

person.name = 'Jack';

const nums = [1, 2, 3, 4];
nums.push(5);

console.log(nums);

// ARROW FUNCTIONS

//regular function
function sayHello() {
    console.log('Hello');
};
sayHello();

const sayHielo = name => console.log(`Hello ${name}`);
sayHielo('Pakawaka Fucker');


const fruits = ['Apples', 'Oranges', 'Grapes'];


// FOREACH - Loop through an array
fruits.forEach((fruit, index) => console.log(fruit));


// MAP - Returns an Array

const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase());
console.log(singleFruit);

// FILTER - Returns an array with something filtered out 

const people = [{
        id: 1,
        name: 'Karen'
    },
    {
        id: 2,
        name: 'Bob'
    },
    {
        id: 3,
        name: 'Sharon'
    }
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);


// SPREAD - Spreads Values Out

const arr = [1, 2, 3];
const arr2 = [...arr, 4];

console.log(arr2);

const person1 = {
    name: 'Brad',
    age: 36,
};

const person2 = {
    ...person1,
    email: 'brad@gmail.com',

};

console.log(person2);

// DESTRUCTURING - Pulling values out of arrays

const profile = {
    fullName: 'John Doe',
    city: 'Biola',
    hobbies: ['Baseball', 'Football'],
};

const {
    fullName
} = profile;

console.log(fullName);


// CLASSES

// SUBCLASSES

// MODULES