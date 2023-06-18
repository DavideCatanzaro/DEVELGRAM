const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const fs = require('fs');
const jwt = require('jsonwebtoken');
const users = require('./users.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());



app.get(`/`,(req,res)=>{
  res.status(200).json(users)
})


app.post('/register', (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  const newUser = { 
    id: users.users.length + 1,
    firstName,
    lastName,
    email,
    username,
    password,
    img: 'https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg',
    cover: 'https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png'
  };
  users.users.push(newUser); 
  const token = jwt.sign({ id: newUser.id }, 'SECRET_KEY'); 
  res.json({ token });
});


/* app.get('/login', (req, res) => {
  const { email, password } = req.query;

  
  const user = users.users.find(user => user.email === email && user.password === password);

  if (user) {
    
    res.status(200).json({ message: 'Login avvenuto con successo!', user });
  } else {
    
    res.status(401).json({ message: 'Credenziali non valide!' });
  }
});
 */

 app.post('/login', (req, res) => {
  const { email, password } = req.body;

  
  const user = users.users.find(user => user.email === email && user.password === password);

  if (user) {
    
    res.status(200).json({ message: 'Login avvenuto con successo!', user });
  } else {
    
    res.status(401).json({ message: 'Credenziali non valide!' });
  }
}); 

const port = 3000;
app.listen(port, () => {
  console.log('Stiamo ascoltando sulla porta: ', port);
});