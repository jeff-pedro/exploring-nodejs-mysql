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

let sql;

// // Escape query values... to prevent sql injection attack
let address = 'Mountain 21';
sql = `SELECT * FROM customers WHERE address = ${mysql.escape(address)}`

con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
});


// Escape using placeholder [?]
let name = 'Viola';
sql = `SELECT * FROM customers WHERE name = ?`;

con.query(sql, [name], (err, result) => {
    if (err) throw err;
    console.log(result);
});


// Multiple placeholders [?]
name = 'Michael';
address = 'Valley 345';
sql = `SELECT * FROM customers WHERE name = ? OR address = ?`;

con.query(sql, [name, address], (err, result) => {
    if (err) throw err;
    console.log(result);
});