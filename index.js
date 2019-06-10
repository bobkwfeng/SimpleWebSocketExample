/**
 * A chat system using web socket
 * Author: Bob Feng
 * Date: 05/29/2019
 */
const express = require('express');
const websocket = require('ws');
const app = express();

const server = new websocket.Server({server: app.listen(8080)});

server.on('connection', socket => {
    socket.on('message', message => {
        console.log('Message Received: ' + message);
    });
    setTimeout(() => {}, 3000);
    setInterval(() => {socket.send('Hello from server!')}, 3000);
});
