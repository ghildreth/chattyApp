Chatty App
=====================

A minimal and light chat application for ReactJS.


## Screenshots

![screenshot from ChattyApp's Chat Box](https://user-images.githubusercontent.com/34799149/39013358-01f8dd42-43cc-11e8-8b44-58b5b4833c4d.png)


### Usage

Clone project and create your own git repo.

```
Fork and git clone git@github.com:ghildreth/chattyApp.git

npm install

Run two terminals as there is a server in the chattyServer directory and server and a client directory
For both:
cd react-simple-boilerplate

then for the WebSocet:

cd chattyServer
node server.js

then for the client App.jsx:

cd client
npm start
open <http://localhost:3000/>

```

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
  - babel-core
  - babel-loader
  - babel-preset-es2015
  - babel-preset-react
  - babel-preset-stage-0
  - css-loader
  - eslint
  - eslint-plugin-react
  - express
  - node-sass
  - react
  - react-dom
  - sass-loader
  - sockjs-client
  - style-loader
  - uuid
  - webpack
  - webpack-dev-server
  - ws
