const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/posts', (req, res, next) => {
  console.log('mao');
  return res.status(200).send('miao');
});

app.get(`/`,(req,res)=>{
  res.status(200).json(users)
})

app.post(`/register`, (req, res, next) => {
  const { firstName,lastName,username, email, password } = req.body;
  const user = { firstName,lastName,username, email, password };
  saveUser(user);
  res.send('Registrazione completata con successo!');
});

function loadUsers() {
  try {
    const data = fs.readFileSync('users.json');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveUser(user) {
  const users = loadUsers();
  users.push(user);

  fs.writeFileSync('users.json', JSON.stringify(users));
}



const port = 3000;
app.listen(port, () => {
  console.log('Stiamo ascoltando sulla porta: ', port);
});