'use strict';
module.exports = function(app) 
{
  var rusanguLtd = require('../controller/Controller');

     // http://localhost:5050/first
     // http://8080/full/accounts
     // http://8081/full/accounts
  app.route('/full/accounts')
    .get(rusanguLtd.employeeAll)
    .post(rusanguLtd.employeeCreate);

   // http://localhost:5050/#1/second
// http://8080/full/accounts
  app.route('/full/accounts/:taskId')  
    .get(rusanguLtd.employeeOne)
    .put(rusanguLtd.employeeUpdate)
    .patch(rusanguLtd.employeeUpdate)
    .delete(rusanguLtd.employeeDelete);
    
  };