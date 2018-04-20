Chatty App
=====================

My 6th week project that showcases ReactJS and WebSockets that run in unison to create an interactive chat app.
I completed the strech work so that color update for each unique user, and users are able to send images from the input.


## Screenshots

![screenshot from 2018-04-19 17-09-05](https://user-images.githubusercontent.com/34799149/39024381-5a38703e-43f5-11e8-8d82-e5d58e89e935.png)


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
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0
* css-loader
* eslint
* eslint-plugin-react
* express
* node-sass
* react
* react-dom
* sass-loader
* sockjs-client
* style-loader
* uuid
* webpack
* webpack-dev-server
* ws
