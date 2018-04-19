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

  wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each (client) {
      if(client.readyState === ws.OPEN){
        client.send(data);
      }
    });
  };

  const broadcastUserCount = () => {
    wss.broadcast(JSON.stringify({
      type: 'userCount',
      numOfUsers: wss.clients.size
    }));
  };

  broadcastUserCount();
  // adds one to the count to my state
  ws.onmessage = (data) => {

// this generates a date, parses the message from App and repackages with an id and new type key value pair
    const uId = uuidv4();
    let newMsg = JSON.parse(data.data);
    let parsedText = newMsg.type;
    const sendableMessage = JSON.stringify({type: parsedText === "postMessage" ?  "incomingMessage" : "incomingNotification", id: uId, username: newMsg.username, content: newMsg.content});
    // console.log(sendableMessage);

    wss.clients.forEach(function (client) {
      if(client.readyState === WebSocket.OPEN) {
        client.send(sendableMessage);
      }
    });
  };
  console.log(wss.clients.size);
  // set up a callback for when a client closes the connects. This usually means they closed their browser.
  ws.on('close', () => {
      console.log('Client disconnected');
      broadcastUserCount();

  });
});