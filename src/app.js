const path = require('path');
const express = require('express');

/*====== Instantiate express app =========*/
const app = express();
// Create port
const port = process.env.PORT || 3000;

/*========  Express config paths   =======*/
const publicDirectoryPath = path.join(__dirname, '../public/');
const viewsPath = path.join(__dirname, '../templates/');
const partialsPath = path.join(__dirname, '../templates/');

/*========  Express View Engine  =======*/
app.set('view engine', 'hbs');
app.set('views', viewsPath);

/*========  Express Static Files  =======*/
app.use(express.static(publicDirectoryPath));

/*======== Routes  =======*/

/*======== Setting up App =======*/
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
