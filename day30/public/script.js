const socket = io();

const joinChatButton = document.getElementById('join-chat');
const usernameInput = document.getElementById('username');
const chatContainer = document.querySelector('.chat-container');
const userAuth = document.querySelector('.user-auth');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send');
const messagesContainer = document.getElementById('messages');
const typingContainer = document.getElementById('typing');
const userListContainer = document.getElementById('user-list');

let username = '';

joinChatButton.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username) {
        socket.emit('join', username);
        userAuth.style.display = 'none';
        chatContainer.style.display = 'flex';
    }
});

sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
        socket.emit('message', { username, message });
        chatInput.value = '';
    }
});

let typingTimeout = null;

chatInput.addEventListener('input', () => {
    if (username) {
        socket.emit('typing', username);
        clearTimeout(typingTimeout); 
        typingTimeout = setTimeout(() => {
            socket.emit('stopTyping', username); 
        }, 1000);
    }
});

socket.on('message', (data) => {
    addMessage(data, false);
});

socket.on('typing', (user) => {
    if (user) {
        typingContainer.textContent = `${user} is typing...`;
    }
});

socket.on('stopTyping', () => {
    typingContainer.textContent = '';
});

socket.on('updateUserList', (users) => {
    userListContainer.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        userListContainer.appendChild(li);
    });
});

socket.on('messageHistory', (history) => {
    history.forEach(message => {
        addMessage(message, message.username === username);
    });
});

function addMessage(data, isOwnMessage) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (isOwnMessage) {
        messageElement.classList.add('own');
    } else {
        messageElement.classList.add('other');
    }
    messageElement.textContent = `${data.username}: ${data.message}`;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
