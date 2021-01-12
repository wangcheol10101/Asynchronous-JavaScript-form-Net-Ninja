const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      //   JSON.parse(): convert JSON string into JS objects
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });

  // open method
  request.open('GET', 'todos.json');
  //the request isn't being made, just setting up the request

  // send request
  request.send();
};

getTodos((err, data) => {
  console.log('callback is fired');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
