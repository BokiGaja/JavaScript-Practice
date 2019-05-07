// JS VARIABLE SCOPE

// variables declared outside of the function can be used in function
const outerText = 'I am not in the function';

function jsScope() {
  const innerText = 'I am in the function';
  for (let i = 0; i<5; i++) {
    // variables declared with let or const are not hoisted, so they can't be reached outside of for loop
    // variables declared with var are hoisted and can be reached
    var text = 'Hello';
  }
  console.log(text);
  console.log(outerText);
}

// variables declared in function cannot be reached out of that function
console.log(innerText);

jsScope();