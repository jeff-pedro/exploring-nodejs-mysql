const mysql = require('mysql2');

// Create connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});