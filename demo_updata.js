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

// Update table
const sql = 'UPDATE customers SET address = "Canyon 123" WHERE address = "Valley 345"';
con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`${result.affectedRows} record(s) updated`);
});

