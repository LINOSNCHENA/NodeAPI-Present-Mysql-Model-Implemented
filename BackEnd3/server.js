const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const ats = require('./datax/xworkers')
const dc = require('./datax/xcontacts')
const df = require('./datax/xfamily')
 const xts = require('./datax/xsmart')
// const port = 3030
const port = 8081

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, }))


app.use(function (req, res, next) {              //  SECURITY LUMUMBA
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();  });

app.get('/', (request, response) => {
response.json({ info: ' WELCOME TO STUDENT REGISTRATION PORTAL 2019' })})

app.get('/full/accounts', ats.getEmployees)            // Route #1
app.get('/full/accounts/:id1', ats.getEmployee)        // Route #2
app.delete('/full/accounts/:id1', ats.deleteEmployee)  // Route #3
app.put('/full/accounts/:id', ats.updateEmployee)      // Route #4
app.post('/full/accounts', ats.createEmployee)         // Route #5

app.get('/xcontacts', dc.getContacts)                // Route #1
app.get('/xcontacts/:id2', dc.getContact)            // Route #2
app.delete('/xcontacts/:id2', dc.deleteContact)      // Route #3
app.put('/xcontacts/:id2', dc.updateContact)         // Route #4
app.post('/xcontacts/:d1', dc.createContact)         // Route #5

app.get('/xfamily', df.getFamilys)                // Route #1
app.get('/xfamily/:id3', df.getFamily)            // Route #2
app.delete('/xfamily/:id3', df.deleteFamily)      // Route #3
app.put('/xfamily/:id3', df.updateFamily)         // Route #4
app.post('/xfamily/:d1', df.createFamily)         // Route #5

 app.get('/full/accounts', xts.getEmployees)            // Route #1
app.get('/full/accounts/:id1', xts.getEmployee)        // Route #2
app.delete('/full/accounts/:id1', xts.deleteEmployee)  // Route #3
app.put('/full/accounts/:id', xts.updateEmployee)      // Route #4
app.post('/full/accounts', xts.createEmployee)         // Route #5

app.listen(port, () => {  console.log(`Postgresql server #3 is running on port ${port}.`)})
