Chatty App
=====================

Hello World and welcome to my project!

'Chatty App' showcases ReactJS and WebSockets that run in unison to create an interactive chat application.
Users start off as 'Anonymous' until they type in their own screename. When this happens, there's a notification for the entire chatroom and the username's color changes to a random color. When you type into the username input you don't even have to press enter, as an 'onBlur' handles when you've switched to typing a message. Messages are able to be images too! This required some cool RegEx!

Please have fun! XD

## Screenshots
![screenshot from 2018-04-19 20-59-03](https://user-images.githubusercontent.com/34799149/39030145-bb07fbcc-4414-11e8-9b76-e3b69d8cbe7f.png)
![screenshot from 2018-04-19 17-09-05](https://user-images.githubusercontent.com/34799149/39024381-5a38703e-43f5-11e8-8d82-e5d58e89e935.png)
![screenshot from 2018-04-19 21-02-51](https://user-images.githubusercontent.com/34799149/39030229-3c262986-4415-11e8-9d08-d78a844ed8b5.png)

### Usage

```
Fork and git clone git@github.com:ghildreth/chattyApp.git

npm install

Run two terminals as there is a WebSocket Server in the 'chattyServer' folder and server in 'client'.
For both:

cd react-simple-boilerplate

...then for the WSS:

cd chattyServer
node server.js

...then for the client App.jsx:

cd client
npm start
open <http://localhost:3000/>

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
