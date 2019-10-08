'use strict';
module.exports = function(app) {
  var rusanguLtd = require('../Controller/controller');

  app.route('/second')
    .get(rusanguLtd.employeeAll)
    .post(rusanguLtd.employeeCreate);

   // http://localhost:2020/second

  app.route('/second/:taskId')  
    .get(rusanguLtd.employeeOne)
    .put(rusanguLtd.employeeUpdate)
    .delete(rusanguLtd.employeeDelete);
    };