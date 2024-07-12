const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/user/create_user', async (req, res) => {
  // логика создания пользователя
  res.status(201).send({ message: 'User created' });
});

app.post('/user/login', async (req, res) => {
  // логика авторизации пользователя
  res.status(200).send({ message: 'User logged in' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
