const getTodos = (resource, callback) => {
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
  request.open('GET', resource);
  //the request isn't being made, just setting up the request

  // send request
  request.send();
};

// get one of data before move on to the next
getTodos('todos/luigi.json', (err, data) => {
  console.log(data);
  getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/shaun.json', (err, data) => {
      console.log(data);
    });
  });
});
