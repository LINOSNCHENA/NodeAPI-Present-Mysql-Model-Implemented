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
    // console.log("Rusangu staff #1 : ", name);//1
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

// exports.employeeUpdate = function (req, res) {
//   //   UPDATE method #3
//   console.log('ZAMBIA'+req)
//   console.log('ZIMBABWE'+res)
//   Employee.updateByTaskId(
//     req.params.taskId,
//     new Employee(req.body),
//     //function (err, post, dept, salary, name) {
//       function (err, result) {
//       if (err) res.send(err);
//       res.json(post, dept, salary, name);
//     }
//   );
// };

exports.employeeUpdate = function (req, res) {
  console.log(req + "===========ccccccccccUPDATEcccCONTROLLERccccccccccccc");

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Submit all required fields" });
  } else {
    const productUpdate = new Employee(req.body);
    var id=req.params.taskId;
    console.log('id='+id)
    console.log(productUpdate + "===========cccccccccccccccccccccccccccc");
    Employee.update(id, productUpdate, function (err, result) {
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
