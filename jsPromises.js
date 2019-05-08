const promise1 = new Promise((res, rej) => {
  const randomNumber = Math.random()*10;
  setTimeout(() => {
    if (randomNumber < 5) {
      rej('Error!');
    } else {
      res('Success!');
    }
  }, 2000)
});

const promise2 = 42;
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(result => console.log(result))
  .catch(error => console.log(error));