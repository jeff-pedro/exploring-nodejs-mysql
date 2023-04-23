const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb' // <- database name
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

// Select table with Limit of rows
const sql = 'SELECT * FROM customers LIMIT 5';
con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
});
