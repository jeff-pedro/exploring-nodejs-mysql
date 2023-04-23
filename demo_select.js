const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});


// Select all columns
con.query('SELECT * FROM customers', (err, result, fields) => {
    if (err) throw err;
    console.log(result);
});

// Selest some columns
con.query('SELECT name, address FROM customers', (err, result, fields) => {
    if (err) throw err;
    console.log(result);
});