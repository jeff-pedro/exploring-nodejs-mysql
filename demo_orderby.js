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


// Order By "ASC -> default"
con.query('SELECT * FROM customers ORDER BY name', (err, result) => {
    if (err) throw err;
    console.log(result);
});