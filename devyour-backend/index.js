const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// abbiamo inizializzato express e stiamo parsando la richiesta traformandola in un oggetto js
app.get('/api/posts', (req, res, next) => {
  //cerca nel JSON
  console.log('mao');
  return res.status(200).send('miao');
});

const port = process.env.NODE_PORT || 3000;
app.listen(port, () => {
  console.log('Stiamo ascoltando sulla porta: ', port);
});
