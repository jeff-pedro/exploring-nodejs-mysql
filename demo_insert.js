const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'mydb'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});


// Insert into table
let sql = 'INSERT INTO customers (name, address) VALUES ("Harry", "Privet Drive 4")';

con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('1 record inserted')
})


// Insert multiple records
sql = 'INSERT INTO customers (name, address) VALUES ?';

let values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
];

con.query(sql, [values], (err, result) => { // <- value to be populate in ?
    if (err) throw err;
    console.log(`Number of records inserted: ${result.affectedRows}`);
});