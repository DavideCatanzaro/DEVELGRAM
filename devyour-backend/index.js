const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors') 
const fs = require('fs')
const app = express();

app.use(cors())
app.use(bodyParser.json());

// abbiamo inizializzato express e stiamo parsando la richiesta traformandola in un oggetto js
app.get('/api/posts', (req, res, next) => {
  //cerca nel JSON
  console.log('mao');
  return res.status(200).send('miao');
});

//api/users?username=kfadfdsf
app.get('/api/users',(req,res,next) => {
 // let firstName = req.query.firstname.toLowerCase()
let userName = req.query.username.toLowerCase()
let usersList = JSON.parse(fs.readFileSync('C:/Users/farin/OneDrive/Desktop/DevGram/DEVYOUR/devyour-backend/users.json')).users
let searchResult=usersList.filter((user) => user.username.toLowerCase().includes(userName)) //|| user.firstName.toLowerCase().includes(firstName) ) 
console.log(searchResult)
return res.status(200).send(searchResult);
}) 

//app.get('/api/users',(req,res,next) => {
 //  let firstName = req.query.firstname.toLowerCase()
 //let usersList = JSON.parse(fs.readFileSync('C:/Users/farin/OneDrive/Desktop/DevGram/DEVYOUR/devyour-backend/users.json')).users
 //let searchResult=usersList.filter((user) => user.firstName.toLowerCase().includes(firstName)) 
 //console.log(searchResult)
 //return res.status(200).send(searchResult);
 //}) 



const port = process.env.NODE_PORT || 3000;
app.listen(port, () => {
  console.log('Stiamo ascoltando sulla porta: ', port);
});
