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

// drop tables (clean)
con.query('DROP TABLE users', (err) => {
    if (err) throw err;
    console.log('Table users deleted');
});

con.query('DROP TABLE products', (err) => {
    if (err) throw err;
    console.log('Table products deleted');
});

// create tables
sql = 'CREATE TABLE IF NOT EXISTS products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))'
con.query(sql, (err) => {
    if (err) throw err;
    console.log('Table products created');
});

sql = 'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product INT)'
con.query(sql, (err) => {
    if (err) throw err;
    console.log('Table users created');
});

// insert records
const productsValue = [
    ['Chocolate Heaven'],
    ['Tasty Lemons'],
    ['Vanilla Dreams']
];

const usersValue = [
    ['John', 1],
    ['Peter', 1],
    ['Amy', 2],
    ['Hannah', null],
    ['Michael', null],
]

con.query('INSERT INTO products (name) VALUES ?', [productsValue], (err, result) => {
    if (err) throw err;
    console.log(`Table products populated with ${result.affectedRows} records`);
});

con.query('INSERT INTO users (name, favorite_product) VALUES ?', [usersValue], (err, result) => {
    if (err) throw err;
    console.log(`Table users populated with ${result.affectedRows} records`);
});


// JOIN (return records with a match in both tables)
sql = `
SELECT users.name AS user, 
products.name AS favorite 
FROM users 
JOIN products ON users.favorite_product = products.id` // can use INNER JOIN too
con.query(sql, (err, result) => {
    if (err) throw err;
    console.log({ "JOIN": result });
});

// LEFT JOIN (return all records that matched or not with table on the left side) 
sql = `
SELECT users.name AS user, 
products.name AS favorite 
FROM users 
LEFT JOIN products ON users.favorite_product = products.id`
con.query(sql, (err, result) => {
    if (err) throw err;
    console.log({ "LEFT JOIN": result });
});

// LEFT JOIN (return all records that matched or not with table on the right side) 
sql = `
SELECT users.name AS user, 
products.name AS favorite 
FROM users 
RIGHT JOIN products ON users.favorite_product = products.id`
con.query(sql, (err, result) => {
    if (err) throw err;
    console.log({ "RIGHT JOIN": result });
});