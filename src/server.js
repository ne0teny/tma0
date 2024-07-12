// server.js

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const botToken = 'YOUR_BOT_TOKEN';

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const { message } = req.body;

    if (message && message.text) {
        const chatId = message.chat.id;
        const responseMessage = 'Hello from your Mini App!';

        axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            chat_id: chatId,
            text: responseMessage,
        })
        .then(response => {
            res.send('Message sent');
        })
        .catch(error => {
            console.error('Error sending message:', error);
            res.send('Error sending message');
        });
    } else {
        res.send('No message to process');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
