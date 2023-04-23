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

// Create table
let sql = 'CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))';
con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Table created!')
});

// Alter table
sql = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Table altered!')
});