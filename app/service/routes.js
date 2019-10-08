'use strict';
module.exports = function(app) {
  var rusangu = require('../Controller/controller');

  app.route('/business')
    .get(rusangu.employeeAll)
    .post(rusangu.employeeCreate);

   // http://localhost:2020/business
   
  app.route('/business/:taskId')  
    .get(rusangu.employeeOne)
    .put(rusangu.employeeUpdate)
    .delete(rusangu.employeeDelete);
    };