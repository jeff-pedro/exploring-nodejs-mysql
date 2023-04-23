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

// Select with Where filter
con.query(`SELECT name, address FROM customers WHERE address = 'Highway 71'`, (err, result) => {
    if (err) throw err;
    console.log(result);
});