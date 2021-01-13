// async & await
// whenever we call an asynchronous function that always returns a promise regardless of what's inside
const getTodos = async () => {
  // use await keyword instead of then method
  // await assigning a value to a variable(response) until the promise has resolved
  const response = await fetch('todos/luigi.json');
  const data = await response.json();
  return data;
};

console.log(1);
console.log(2);
// not going to block the rest of the code
getTodos().then((data) => console.log('resolved:', data));
console.log(3);
console.log(4);
