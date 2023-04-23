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


// Delete From Table 
con.query('DELETE FROM customers WHERE address = "4 Privet Drive"', (err, result, fields) => {
    if (err) throw err;
    console.log(`Number of records deleted: ${result.affectedRows}`);
}); // <- não esquecer da declaração WHERE