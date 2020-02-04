const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./src/events');               // const events = require('./events');
const bearerToken = require('express-bearer-token');  // AMCOR SECURITY #1
const oktaAuth = require('./src/auth');               // ARMCOR SECURITY #2


const connection = mysql.createConnection({  host: 'localhost', user: 'root',
 password : 'Katumbi22@', database : 'presly'});
connection.connect();
const port = process.env.PORT || 8080;

const app = express()
  .use(cors()).use(bodyParser.json())
  .use(events(connection))
  .use(bearerToken()).use(oktaAuth)
  .use(events(connection));

app.listen(port, () => { console.log(`Express server listening on port ${port}`);
});