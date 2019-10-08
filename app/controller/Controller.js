'use strict';
var Employee = require('../Model/model.js');

exports.employeeAll = function(req, res) {                         //  GET method #1
  Employee.getAll(function(err, names) {     if (err)
      res.send(err);   console.log('Rusangu staff #2 : ', names);      
      res.send(names);  });
};

exports.employeeOne = function(req, res) {                        //   GET method #2
  Employee.getByTaskId(req.params.taskId, function(err, names) {
    if (err)
      res.send(err);  
      res.json(names);
  });
};

exports.employeeDelete = function(req, res) {                     //   DELETE method #3
  Employee.removeEmployee( req.params.taskId, 
    function(err, jobData) {console.log(req);
    if (err)
      res.send(err);  res.json({ jobData, message: 'Deletion was successful!' });
  });
};

exports.employeeUpdate = function(req, res) {                     //   UPDATE method #4
  Employee.updateBytaskId(req.params.taskId, new Employee(req.body), 
  function(err,post,dept,salary,names) {
    if (err)
      res.send(err);    
      res.json(post,dept, names,salary);
  });
};

exports.employeeCreate = function(req, res) {                      //    POST method #5
  var rusangu = new Employee(req.body);
   if(!rusangu.names || !rusangu.status){
        res.status(400).send({ error:true, 
          message: 'Requirements include name,post,salary, and salary' }); }
   else{ 
  Employee.createEmployee(rusangu, function(err, names) {  if (err)
           res.send(err);  console.log(rusangu);res.json(names);  });  }
};