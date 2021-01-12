const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });
    request.open('GET', resource);
    request.send();
  });
};

getTodos('todos/luigi.json')
  .then((data) => {
    console.log('promise resolved:', data);
  })
  .catch((err) => {
    console.log('promise rejected:', err);
  });

// promise example
const getSomething = () => {
  // to do something in here like get data
  // when we use promise the first thing we do is return a new promise
  // Promise is something which is gonna take some time to do
  // automatically get access to two parameters -- resolve / reject (functions)
  return new Promise((resolve, reject) => {
    // do the network request
    resolve('some data');
    // reject('some error');
  });
};

// fire the first function in then() when resolve the promise
// the second one fires if we reject
// the first function takes the data that we passed through to the resolve function
getSomething().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);
// a slightly different way we can write
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
