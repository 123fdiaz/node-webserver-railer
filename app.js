require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;


//handlerbar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Francisco diaz',
    titulo: 'curso de node'
  });
});


app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Francisco diaz',
    titulo: 'curso de node'
  });
});


app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Francisco diaz',
    titulo: 'curso de node'
  });
});

app.listen(port)