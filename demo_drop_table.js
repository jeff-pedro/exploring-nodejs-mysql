const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'mydb',
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});


// Drop Table 
con.query('DROP TABLE customers', (err, result, fields) => {
    if (err) throw err;
    console.log(result);
    console.log(`Table deleted`);
});

// Drop Table if exists (to avoid error)
con.query('DROP TABLE IF EXISTS customers', (err, result, fields) => {
    if (err) throw err;
    console.log(result);
});