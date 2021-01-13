// fetch api
// pass it a argument which is the resource that we want to fetch (endpoint, local resource...)
fetch('todos/luigi.json')
  // this returns to us a promise
  .then((response) => {
    console.log('resolved', response);
    // response.json() gets us the data like json.parse()
    // response.json() returns a promise
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  // this promise is only ever rejected when we get some kind of network error (e.g. offline)
  // if we just mistype the url or the resource then we don't get a rejection
  .catch((err) => {
    console.log('rejected', err);
  });
// fetch() 3 steps
// 1. fetch the data
// 2. take the response and return response.json()
// 3. fire function access to that data
