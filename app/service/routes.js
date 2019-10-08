'use strict';
module.exports = function(app) {
  var rusangu = require('../Controller/controller');

  app.route('/second')
    .get(rusangu.employeeAll)
    .post(rusangu.employeeCreate);

   // http://localhost:2020/second

  app.route('/second/:taskId')  
    .get(rusangu.employeeOne)
    .put(rusangu.employeeUpdate)
    .delete(rusangu.employeeDelete);
    };