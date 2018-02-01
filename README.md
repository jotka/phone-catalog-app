# Phone Catalog App
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a sample project that shows a phone catalog.
This project has been developed using [Angular](https://angular.io/) and
[NgRx](https://github.com/ngrx) to manage the app state, and express in the server side.


## How to run this project (in development mode)

### a) Makefile:

```bash
$ make install run
```

All dependencies will start to install.
Navigate to http://localhost:4200/. Both the client and server app will automatically load.

### b) Manual mode:

Install dependencies:

```bash
$ npm install
$ cd client; npm install; cd ..
$ cd server; npm install; cd ..
```
Run both apps with [Concurrently](https://www.npmjs.com/package/concurrently):

```bash
$ npm start
```

## Code Styleguide
* I am use [Standard JS](https://standardjs.com/) so all developer's code is formatted the same way. Please check [here](https://standardjs.com/#are-there-text-editor-plugins) how to enable it for your IDE
