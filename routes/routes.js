'use strict'
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
let emailDashboard;
const { pool, SelectAllElements } = require('../db/config')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


router.get('/register', (req, res) => {
    res.sendStatus(201)
        // res.render('register')
});

router.post('/login', async(req, res) => {
    const email_password = Object.values(req.body)
    emailDashboard = email_password[0]
    const resultElements = await SelectAllElements()
    let email_u = [];
    let index;

    for (index in resultElements) { email_u.push(Object.values(resultElements[index])) }
    let Verify;
    email_u.find((value) => {
        return Verify = email_password[0] === value[0] && email_password[1] === value[1]
    })

    if (Verify) {
        res.redirect('dashboard')

    } else {
        res.sendStatus(401)
    }
});
router.get('/dashboard', (req, res) => {
    res.render('dashboard', { email: emailDashboard })
})


module.exports = router;