'user strict';
var mysql = require('mysql');


// profile Two for first database connection
var connection = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : 'Monze@2019',
    database : 'presly'
});
module.exports = connection;

// profile One for second  database connection
var connection2 = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : 'Monze@2019',
    database : 'presly'
});
module.exports = connection2;