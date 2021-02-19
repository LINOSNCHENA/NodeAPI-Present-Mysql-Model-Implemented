"user strict";
var mysql = require("mysql");

// profile Two: Password Authentification database connection

var connection1 = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Monze@2019",
  database: "presly",
});
module.exports = connection1;

// profile One: Data manipulation and storage  database connection

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Monze@2019",
  database: "presly",
});
module.exports = connection;
