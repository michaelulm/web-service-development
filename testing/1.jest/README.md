# JavaScript testing with JEST

This first exercise will you introduce into testing JavaScript (*Node*) with [JEST](https://jestjs.io/).

First, checkout this example repo. Make sure you have a working Node-Environment.
* [NodeJS](https://nodejs.org/en/) (I will recommend the LTS Version!)
* [`npm`](https://www.npmjs.com/) or [`yarn`](https://classic.yarnpkg.com/en/)

```console
$ git clone https://github.com/michaelulm/web-service-development
$ cd web-service-development/testing/1.jest/
$ npm install
```

### Add jest to the Project.
Before you can execute the tests, you need to add JEST to the Project. For that, add the JEST-Module via `npm`/`yarn` as development dependency.
```console
$ npm i -D jest
```

After that, you should be able to run the existing tests.
```console
$ npm test
```

As you can see, there is no additional configuration required, to run the tests. This is one of the big advantages of JEST.

You may also noticed, that the tests not all green...

### Fix failing tests.
Now, get familiar with the Syntax of JEST. In [test.js](./test.js) you can find some predefined tests. Some are for illustration. Fix the **TODO** and `fail`ing tests.

If you need more detailed information, take a look into the [JEST API Reference](https://jestjs.io/docs/en/api).
