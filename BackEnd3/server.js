require("dotenv").config();
require('./models/smartdata');
const express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");
var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('AT-Home connection #1 successful!'));

const administrators=require("./managers/validator")

//////////////////////////////////////////////// REGISTER
app.post("/signup", function (req, res) {    
  if (administrators.checkInputDataNULL(req, res)) return false;
  if (administrators.checkInputDataQuality(req, res)) return false;
  var dbFunctions = require("./models/connectSmarts");
  dbFunctions.createUser(req, res);
});

app.post("/login", function (req, res) {
  if (administrators.checkInputDataNULL(req, res)) return false;
  if (administrators.checkInputDataQuality(req, res)) return false;
  var dbFunctions = require("./models/connectSmarts");
  dbFunctions.loginUser(req, res);
});

///////////////////////////////////////////////// ACCESS

var myObj = { firsname : "John", lastname : "Doe" };
console.log(myObj);

const PORT = process.env.PORT6 || 8086;
app.listen(PORT, () => console.log(`Server6 is -SERVER-listening on port 3C ${PORT}`))
