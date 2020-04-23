# REST testing

In this exercise, we will test our REST-Service.  
The service is more or less the same as from the initial [REST exercise](../../nodejs/rest/).

We just have removed the SQLite Database and add instead a simple "in memory" replacement.

Now it is on you to create tests for all implemented REST-calls (GET/POST/PUT/DELETE).

Create at least one test for each method (GET (all), GET (by id), POST, PUT, DELETE).  

If you're not familiar with the service, check the code or simple start it (`npm start`) and test its behavior.

## Getting started
First, checkout this example repo. Make sure you have a working Node-Environment.
* [NodeJS](https://nodejs.org/en/) (I will recommend the LTS Version!)
* [`npm`](https://www.npmjs.com/) or [`yarn`](https://classic.yarnpkg.com/en/)

```console
$ git clone https://github.com/michaelulm/web-service-development
$ cd web-service-development/testing/rest/
$ npm install
```

Check the [**app/app.test.js**](app/app.test.js), there you will find the predefined structure for the tests, as well as a example test and a example response from the *supertest* request.

```javascript
//...
  let request;

  beforeEach(() => {
    request = supertest(app);
  });
//...
```
this will create for each test a fresh request object, so that you can perform all tests independently.

When you execute `request.METHOD` (`.get`, `.post`, ...), you should get a response like the following. Don't forget that express will response **asynchron**! 
```json
{
  header: {
    connection: "close",
    "content-length": "235",
    "content-type": "application/json; charset=utf-8",
    date: "Thu, 23 Apr 2020 13:26:46 GMT",
    etag: 'W/"eb-56ncnmAl9D8OPBf6+c+/y6H9lzI"',
    "x-powered-by": "Express",
  },
  req: {
    data: undefined,
    headers: { "user-agent": "node-superagent/3.8.3" },
    method: "GET",
    url: "http://127.0.0.1:37573/notes",
  },
  status: 200,
  text:
    '{"notes":[{"id":1,"title":"my first note","description":"this is my first note"},{"id":2,"title":"learn testing","description":"learn how to test REST-APIs"},{"id":3,"title":"buy coffee","description":"need more coffee to code well"}]}',
}
```

With the `request` object, you can not just execute the HTTP-methods, you can also set individual headers or send a custom body.
```javascript
// ...

  request.post("/path")
         .send({ message: "some text" })      // with `send` you can send a custom body to the 'server' (like JSON, URL-encoded etc.)
         .set('Accept', 'application/json');  // with `set` you can set custom request headers
// ...
```

For more information, take a look on the [supertest docu](https://www.npmjs.com/package/supertest).

> supertest brings it's own possibility to assert the response. you can chain multiple `.expect()` calls (like `.then()` in a promise chain) and inside that, you can do the assertions.  

