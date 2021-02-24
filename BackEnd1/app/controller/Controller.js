"use strict";
var Employee = require("../model/Model.js");

exports.employeeCreate = function (req, res) {
  //    POST method #1
  var rusangu = new Employee(req.body);
  if (!rusangu.name || !rusangu.status) {
    res.status(400).send({
      error: true,
      message: "Requirements include name,post,dept and salary",
    });
  } else {
    Employee.createEmployee(rusangu, function (err, nameZ) {
      if (err) res.send(err);
      console.log(rusangu);
      res.json(nameZ);
    });
  }
};

exports.employeeAll = function (req, res) {
  //  GET method #2A
  Employee.getAll(function (err, nameX) {
    if (err) res.send(err);
    res.send(nameX);
  });
};

exports.employeeOne = function (req, res) {
  //   GET method #2B
  Employee.getByTaskId(req.params.taskId, function (err, name) {
    if (err) res.send(err);
    res.json(name);
  });
};


exports.employeeUpdate = function (req, res) {
  console.log("|===========EmployeeUpdate======CONTROLLER==========|");
  console.log(req.body);
  console.log('1-typeof req.body.id     = : '+req.body.id);
  console.log(typeof req.body.id);
  console.log('2-typeof req.paramsx2    = : '+req.params+'-|-'+Object.values(req.params));
  console.log(Object.values(req.params));
  console.log(typeof req.params);
  console.log('3-typeof req.params.taskId= : '+req.params.taskId);
  console.log(typeof req.params.taskId);
  console.log("|===========MIDDLE==uu====CONTROLLER==========|");

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Submit all required fields" });
  } else {
    const currentUpdate1 = new Employee(req.body);
    var id=req.params.taskId;
    Employee.update(id, currentUpdate1, function (err, result) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Record updated successfully",
      });
    });
  }
};

exports.employeeDelete = function (req, res) {
  //   DELETE method #4
  Employee.removeEmployee(req.params.taskId, function (err, jobData) {
    //  console.log(req);
    if (err) res.send(err);
    res.json({ jobData, message: "Deletion was successful!" });
  });
};
