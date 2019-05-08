// let and const vs var

function es6() {
  for (let i = 0; i < 5; i++) {
    // you can't access let or const outside for loop
    var text1 = 'Hello from function';
    let text2 = 'Hello again'
  }
  let someNumber = 6;
  // var can be redefined even if we didn't know it was previously defined
  var text1 = 'Some other text';
  // let or const can't be redefined once we define it, it can only be updated
  // let someNumber = 5;
  console.log(text1);
  // console.log(text2)
}

es6();


// classes vs class functions

// ES5
var Person = function (id, firstName, lastName) {
  this.id = id;
  this.fullName(firstName, lastName)
}
Person.prototype.fullName = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// ES6
class Person2 {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.fullName(firstName, lastName)
  }

  fullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}


// Arrow functions

class Numbers {
  constructor(numbers, newNumber) {
    this.numbers = numbers;
    this.newNumber = newNumber;
  }

  // In ES6 function we use lexical this that can reach to this objects properties
  // without need to bind it
  replaceWithTwoES6() {
    let newArr = this.numbers.map(number => this.newNumber);
    console.log(newArr)
  }

  // In ES5 function we need to bind this in order to reach this.newNumber
  replaceWithTwoES5() {
    let newArr = this.numbers.map(function (number) {
      return this.newNumber
    }.bind(this))
    console.log(newArr);
  }
}

let number = new Numbers([1, 2, 3], 2);
number.replaceWithTwoES6();
number.replaceWithTwoES5();


// Async/await vs Promise.then

// Promise.then
const getJSON = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const json = '{"someJson": "Hi i am JSON"}'
      resolve(json)
    }, 2000)
  })
}

const otherJSON = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const json = '{"someOtherJson": "Hi i am other JSON"}'
      resolve(json)
    }, 2000)
  })
}
// Here try/catch will not hanlde error if JSON.parse fails
const someRequest = () => {
  return getJSON()
    .then(res => {
      const data = JSON.parse(res);
      console.log(data)
      return data
    })
    .then(res => {
      const secondJSON = otherJSON()
        .then(res => console.log(JSON.parse(res)))
        .catch(err => console.log(err))
      return secondJSON;
    })
    .then(() => {
      throw new Error('Ooops')
    })
    .then(res => console.log('Finished'))
    .catch(error => console.log(error))
}

// Async/await
// if we have multiple promises instead of writting chain of handlers, we can write them in a single async function
const someOtherRequest = async () => {
  try {
    const data = JSON.parse(await getJSON());
    console.log(data);
    console.log(JSON.parse(await otherJSON()))
    throw new Error('Async/await error')
    console.log('Finished')
  } catch (e) {
    console.log(e)
  }
}