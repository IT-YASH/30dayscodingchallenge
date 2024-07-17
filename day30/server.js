const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const users = {};
const messageHistory = []; 

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    socket.on('join', (username) => {
        if (username) {
            users[socket.id] = username;
            io.emit('updateUserList', Object.values(users));
            socket.broadcast.emit('message', { username: 'System', message: `${username} has joined the chat` });

            socket.emit('messageHistory', messageHistory);
        }
    });

    socket.on('message', (data) => {
        messageHistory.push(data); 
        io.emit('message', data);
    });

    socket.on('typing', (username) => {
        socket.broadcast.emit('typing', username);
    });

    socket.on('stopTyping', (username) => {
        socket.broadcast.emit('stopTyping', username);
    });

    socket.on('disconnect', () => {
        const username = users[socket.id];
        if (username) {
            delete users[socket.id];
            io.emit('updateUserList', Object.values(users));
            io.emit('message', { username: 'System', message: `${username} has left the chat` });
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
