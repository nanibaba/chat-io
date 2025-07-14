import express from 'express';
import { createServer } from 'node:http';
import { Server } from "socket.io";
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
    res.send({"status": 200});
});

io.on('connection', (socket) => {
    socketHandler(socket);
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});