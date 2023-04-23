const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

// Create database
con.query('CREATE DATABASE mydb', (err, result) => {
    if (err) throw err;
    console.log('Database created!')
});