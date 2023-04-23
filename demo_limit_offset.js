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

// Limiting rows return starting at position 'x' 
const sql = 'SELECT * FROM customers LIMIT 5 OFFSET 2'; // <- third position => [0][1][2]
con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
});


// Short syntax 
con.query('SELECT * FROM customers LIMIT 2, 5', (err, result) => {
    if (err) throw err;
    console.log(result);
});