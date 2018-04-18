// server.js
const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');
const WebSocket = require('ws');

const PORT = 3001;

const server = express()

  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

 const wss = new SocketServer({ server });

 // set up a callback that will run when a client connects to the server
 // when a clinet connects they are assigned a socket, represent by
 // the ws paramater in the callback.

 wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.onmessage = (data) => {
    const uId = uuidv4();
    let newMsg = JSON.parse(data.data);
    // console.log('this is new msg:', newMsg);
    // console.log('this is the new message', newMsg);
    const sendableMessage = JSON.stringify({id: uId, username: newMsg.username, content: newMsg.content});
    console.log(sendableMessage);
    // console.log(`User ${newMsg.currentUser.name} said ${newMsg.content} with id: ${id}`);

    // ws.send('something back:', sendableMessage);
    wss.clients.forEach(function (client) {
      if(client.readyState === WebSocket.OPEN) {
        client.send(sendableMessage);
      }
    });
  };

  // set up a callback for hwen a client closes the coket. THis usually means they closed their browser
  ws.on('close', () => console.log('Client disconnected'));
 });