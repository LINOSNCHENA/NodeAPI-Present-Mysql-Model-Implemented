const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');//,


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {              //  SECURITY LUMUMBA
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();  });

var routes = require('./routes/service/Routes'); 
routes(app); 

port = process.env.PORT || 8080;
app.listen(port);
console.log('BackEnd-1 ServerA is listening at port :' + port);