'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 7000;



app.use('/public', express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

// Define Routes
app.use('/', require('./routes/routes'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})