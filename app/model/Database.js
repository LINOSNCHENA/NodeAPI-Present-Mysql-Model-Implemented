'user strict';


var mysql = require('mysql');
// profile Two for database connection
var connection2 = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : 'Monze2019@',
    database : 'presly'
});
module.exports = connection2;


// profile One for database connection

var connection = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : 'Monze2019@',
    database : 'presly'
});
module.exports = connection;
