const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 5050;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./PAAS/service/Routes'); 
routes(app); 

app.listen(port);
console.log('MySQL-API server is pembing at port :' + port);