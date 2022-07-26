'use strict'
const mysql = require('mysql')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jarvis'
})

const SelectAllElements = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT email_u, mdp_u FROM utilisateur', (err, result) => {
            if (err) {
                reject(err)
                return

            }
            resolve(result)
            return

        })
    })
}

module.exports = { pool, SelectAllElements }