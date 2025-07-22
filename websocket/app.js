import express from 'express';
import { createServer } from 'node:http';
import { Server } from "socket.io";
import axios from 'axios';
import socketHandler from './sockets/index.js';

const app = express();
const PORT = 3005;
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.get('/', (req, res) => {
    axios.get("http://localhost:8080")
    .then(response => {
        res.send({status: 200, data: response.data});
    })
    .catch(error => {
        res.send({status: 500, error: error.code}); 
    });
});

io.on('connection', (socket) => {
    socketHandler(socket);
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});