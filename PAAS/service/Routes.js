'use strict';
module.exports = function(app) 
{
  var rusanguLtd = require('../controller/Controller');

     // http://localhost:5050/first
  app.route('/second')
    .get(rusanguLtd.employeeAll)
    .post(rusanguLtd.employeeCreate);

   // http://localhost:5050/#1/second

  app.route('/second/:taskId')  
    .get(rusanguLtd.employeeOne)
    .put(rusanguLtd.employeeUpdate)
    .delete(rusanguLtd.employeeDelete);
    
  };