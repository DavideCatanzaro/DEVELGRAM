const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const fs = require('fs');
const jwt = require('jsonwebtoken');
const cors = require('cors')
const users = require('./users.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())



app.get(`/`,(req,res)=>{
  res.status(200).json(users)
})

app.post('/register', (req, res) => {
  const { firstName,lastName,username, email, password } = req.body;
  const user = { id: users.users.length + 1,firstName,lastName,username, email, password,img: 'https://png.pngtree.com/png-vector/20191009/ourlarge/pngtree-user-icon-png-image_1796659.jpg',
  cover: 'https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' };

  // Salva il nuovo utente nel database JSON
  saveUser(user);

  res.send('Registrazione completata con successo!');
  
});

// Funzione per salvare l'utente nel database JSON
function saveUser(user) {
  const users = loadUsers();
  users.users.push(user);

  fs.writeFileSync('users.json', JSON.stringify(users));
}

// Funzione per caricare gli utenti dal database JSON
function loadUsers() {
  try {
    const data = fs.readFileSync('users.json');
    return JSON.parse(data);
    
  } catch (error) {
    return [];
  }
  
}

/* app.post('/register', (req, res) => {
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
}); */


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
  const users = loadUsers();

  const user = users.users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.send('Login effettuato con successo!');
  } else {
    res.status(401).send('Credenziali non valide');
  }
});

// Funzione per caricare gli utenti dal database JSON
function loadUsers() {
  try {
    const data = fs.readFileSync('users.json');
    return JSON.parse(data);
  } catch (error) {
    console.error('Errore durante la lettura del file users.json', error);
    return [];
  }
}

const port = process.env.NODE_PORT || 3000;
app.listen(port, () => {
  console.log('Stiamo ascoltando sulla porta: ', port);
});