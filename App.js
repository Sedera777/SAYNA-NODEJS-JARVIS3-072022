'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 7000;

app.use('/public', express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.send('login');
});















app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});