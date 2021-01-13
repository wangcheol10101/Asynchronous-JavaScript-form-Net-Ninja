// async & await
// whenever we call an asynchronous function that always returns a promise regardless of what's inside
const getTodos = async () => {
  // use await keyword instead of then method
  // await assigning a value to a variable(response) until the promise has resolved
  const response = await fetch('todos/luigis.json');
  // if response doesn't have a status of 200 then we throw out own error
  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }
  const data = await response.json();
  return data;
};

// not going to block the rest of the code
getTodos()
  .then((data) => console.log('resolved:', data))
  .catch((err) => console.log('rejected:', err.message));
