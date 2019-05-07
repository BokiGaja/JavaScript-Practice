// Array of colors
let colors = ['blue', 'green', 'yellow', 'red'];

for (let i = 0; i<colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(color => console.log(color));


// Rotate an array to right
function rotateArray(array, steps) {
  for (let i = 0; i<steps; i++) {
    let temp = array.pop();
    array.unshift(temp);
  }
  return array;
}

console.log(rotateArray(colors, 2));

// Array reduce
const numbers = [23, 55, 87, 66];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers.reduce(reducer, 50);
console.log(sum);


// Number to array
function numberToArray(number) {
  const arr = [];
  for (let i = 0; i<number; i++) {
    arr.push(i);
  }
  for (let i = number; i>=0; i--) {
    arr.push(i)
  }
  return arr;
}

console.log(numberToArray(5));


// Zoo inventory
var myZoo = [
    ["King Kong", ["gorrila", 42]],
    ["Nemo", ["fish", 5]],
    ["Punzsutawney Phil", ["groundhog", 11]]
];

function zooInvetory(zoo) {
  const resultArr = zoo.map(animal => {
    animal = animal.flat(2);
    animal.splice(1, 0, 'the');
    animal.splice(3, 0, 'is');
    return animal.join(' ');
  });
  return resultArr;
}

console.log(zooInvetory(myZoo));