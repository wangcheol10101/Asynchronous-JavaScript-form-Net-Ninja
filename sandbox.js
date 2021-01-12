// make a request from js
// 1. make a request object
const request = new XMLHttpRequest();
// XMLHttpRequest() creates a request object (can work with any kind of data)
// request object is going to be used to send a request from the browser

// event listener and ready-state-change event
// fires every time there's a state change in the request
request.addEventListener('readystatechange', () => {
  // request.readyState: get the state that the current request is in (1, 2, 3, 4)
  // 상태내용 MDN참조
  console.log(request, request.readyState);
  // if the readyState is equal to 4 that's the point when we can do something with the responseText
  if (request.readyState === 4 && request.status === 200) {
    // request.responseTest: contains the response data (a giant string called json data)
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log('could not fetch the data');
  }
});

// open method
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//the request isn't being made, just setting up the request

// send request
request.send();
