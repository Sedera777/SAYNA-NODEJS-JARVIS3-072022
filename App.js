'use strict'
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to the JARVIS APP');
});
app.listen(7000, () => {
    console.log('Listening on port 7000')
});