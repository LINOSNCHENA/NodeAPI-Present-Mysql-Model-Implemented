"user strict";
var conect = require("./Database.js");

var Employee = function (employee) {
  this.name = employee.name;
  this.dept = employee.dept;
  this.post = employee.post;
  this.salary = employee.salary;
  this.status = employee.status;
  this.createdat = new Date().toISOString().substring(0, 19).replace("T", " ");
};

// http://localhost:8081/full/accounts                                        // POST EMPLOYEE  #1
Employee.createEmployee = function (newEmployee, result) {
  conect.query("INSERT INTO BANK1 set ?", newEmployee, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Employee ID #", res.insertId, " Has been created", res);
      result(null, res.insertId);
    }
  });
};


// http://localhost:8081/full/accounts                                            //  GET ONE  #2A
Employee.getAll = function (result) {
  conect.query("Select * from BANK1", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("employees : ", res);
      result(null, res);
    }
  });
};

// http://localhost:8081/full/accounts                                           // GET ONE  #2B
Employee.getByTaskId = function (employeeX, result) {
  conect.query(
    "Select * from BANK1 where id = ? ",
    employeeX,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log("chosen employee : ", res);
        result(null, res);
      }
    }
  );
};


// http://localhost:8081/full/accounts/:id                                     // UPDATE ONE   #3
Employee.update = function (id, employee, result) {
  var datax = [employee.name, employee.dept, employee.post, employee.salary, employee.status, employee.createdat, id];
  var sqlx = "UPDATE BANK1 SET `name`=?,`dept`=?,`post`=?,`salary`=?,`status`=?,`createdat`=? WHERE `id` = ?";
  conect.query(sqlx, datax,
    function (err, res) {
      if (err) {
        console.log("error", err);
        result(err, null);
      } else {
        console.log("update: ", res);
        result(null, res);
      }
    })
}

// http://localhost:8081/full/accounts/:id                                     // DELETE ONE  #4
Employee.removeEmployee = function (id, result) {
  conect.query("DELETE FROM BANK1 WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log(res, "Employeed ID #", id, " has been deleted: ");
      result(null, res);
    }
  });
};

module.exports = Employee;
