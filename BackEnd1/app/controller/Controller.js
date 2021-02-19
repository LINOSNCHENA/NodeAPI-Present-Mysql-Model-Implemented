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
    Employee.createEmployee(rusangu, function (err, name) {
      if (err) res.send(err);
      console.log(rusangu);
      res.json(name);
    });
  }
};

exports.employeeAll = function (req, res) {
  //  GET method #2A
  Employee.getAll(function (err, name) {
    if (err) res.send(err);
    console.log("Rusangu staff #1 : ", name);
    res.send(name);
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
  //   UPDATE method #3
  Employee.updateByTaskId(
    req.params.taskId,
    new Employee(req.body),
    function (err, post, dept, salary, name) {
      if (err) res.send(err);
      res.json(post, dept, salary, name);
    }
  );
};

exports.employeeDelete = function (req, res) {
  //   DELETE method #4
  Employee.removeEmployee(req.params.taskId, function (err, jobData) {
    console.log(req);
    if (err) res.send(err);
    res.json({ jobData, message: "Deletion was successful!" });
  });
};
