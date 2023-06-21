const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let posts = require('./post.json');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/api/posts', (req, res) => {
  res.status(200).send(JSON.stringify(posts.post));
});

const port = 3000;

app.listen(port, () => {
  console.log('Stiamo ascoltando sulla porta: ', port);
});