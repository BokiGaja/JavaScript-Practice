// JS and JSON objects
const person = {
  firstName: 'Pera',
  lastName: 'Peric',
  age: 26
};

const personJSON = '{' +
    '"firstName":"Pera",' +
    '"lastName":"Peric",' +
    '"age": 20' +
    '}';

const parsedJSON = JSON.parse(personJSON);
const stringifiedJS = JSON.stringify(person);


// JS and JSON arrays
const numbers = [23, 44, 55, 66];
const numbersJSON = JSON.stringify(numbers);
JSON.parse(numbersJSON).forEach(el => console.log(el));