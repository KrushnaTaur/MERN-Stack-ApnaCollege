const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/hello', (req, res) => {
  res.send('Hello, EJS!');
});

app.get('/rolldice', (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  res.render('rolldice.ejs', { diceValue });
});

app.get('/ig/:username', (req, res) => {
  const { username } = req.params;
  const followers = ['krish', 'ravi', 'ketan'];
  res.render('ig.ejs', { username, followers });
});

app.get('/insta/:username', (req, res) => {
  const { username } = req.params;
  const instaData = require('./data.json');
  const data = instaData[username];
  if(data){
    res.render('instagram.ejs', { data });
  } else {
    res.render('error.ejs');  
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});