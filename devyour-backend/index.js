const express = require('express');
const bodyParser = require('body-parser');
const followersData = require('./follow.json')

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.get('/follow', (req, res) => {
  res.json(followersData.follower);
});

const port = process.env.NODE_PORT || 3000;
app.listen(port, () => {
  console.log('Stiamo ascoltando sulla porta: http://localhost:3000');
});
