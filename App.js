'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const db = require('./db/config')


app.use('/public', express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
    res.render('login')
});

















app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});