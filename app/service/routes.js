'use strict';
module.exports = function(app) {
  var rusangu = require('../controller/Controller');

  // http://localhost/2020/business 

  app.route('/business')
    .get(rusangu.employeeAll)
    .post(rusangu.employeeCreate);
   
  app.route('/business/:taskId')  // 
    .get(rusangu.employeeOne)
    .put(rusangu.employeeUpdate)
    .delete(rusangu.employeeDelete);
    };