const path = require('path');
const express = require('express');
const hbs = require('hbs');

/*====== Instantiate express app =========*/
const app = express();
// Create port
const port = process.env.PORT || 3000;

/*========  Express config paths   =======*/
const publicDirectoryPath = path.join(__dirname, '../public/');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

/*========  Express View Engine  =======*/
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
/*========  Express Static Files  =======*/
app.use(express.static(publicDirectoryPath));

/*======== Routes  =======*/
app.get('', (req, res) => {
  res.render('index', { title: 'WikiCountry' });
});

app.get('/about', (req, res) => {
  res.end('About page');
});

app.get('/documentation', (req, res) => {
  res.end('documentation page');
});

app.get('/country', (req, res) => {
  res.end('Fetching country details!!');
});

app.get('*', (req, res) => {
  res.end('404 page!');
});

/*======== Setting up App =======*/
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
