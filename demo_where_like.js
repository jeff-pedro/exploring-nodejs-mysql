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

// Select with Where and Like
con.query(`SELECT * FROM customers WHERE address LIKE 'S%'`, (err, result) => {
    if (err) throw err;
    console.log(result);
});




