const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      //   console.log(request.responseText);
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      //   console.log('could not fetch the data');
      callback('could not fetch data', undefined);
    }
  });

  // open method
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  //the request isn't being made, just setting up the request

  // send request
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log('callback is fired');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
