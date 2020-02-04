'use strict';
module.exports = function(app) 
{
  var rusanguLtd = require('../controller/Controller');

// http://8081/full/accounts
  app.route('/full/accounts')
    .get(rusanguLtd.employeeAll)
    .post(rusanguLtd.employeeCreate);

// http://8080/full/accounts/81
  app.route('/full/accounts/:taskId')  
    .get(rusanguLtd.employeeOne)
    .put(rusanguLtd.employeeUpdate)
    .patch(rusanguLtd.employeeUpdate)
    .delete(rusanguLtd.employeeDelete);
    
  };