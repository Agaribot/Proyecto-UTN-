require('dotenv').config();
const express = require('express');
const path = require ('path');
const hbs = require ('hbs');
const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static(__dirname + '/public'));
app.use(require('./router/router'));
app.use(require('./router/contacto'));


// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials/");





app.listen(8000, () => {
    console.log('Server is running at port 8000');
});