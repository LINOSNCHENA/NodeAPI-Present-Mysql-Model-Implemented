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

// http://localhost:8081/full/accounts/:id                                     // UPDATE ONE   #3
Employee.update = function (id, employee, result) {
  console.log('1|'+id);
  console.log('2|'+employee);
  str = JSON.stringify(employee);
  console.log('3|'+str);
str = JSON.stringify(employee, null, 4); // (Optional) beautiful indented output.
  console.log('4|'+str);

    var datas =  [employee.name, employee.dept, employee.post, employee.salary, employee.status,employee.createdat,id];
    var sqls=  "UPDATE BANK1 SET `name`=?,`dept`=?,`post`=?,`salary`=?,`status`=?,`createdat`=? WHERE `id` = ?";//ndpssci

conect.query(sqls, datas,   
      function (err, res) {
      if (err) {
        console.log("error", err);
        result(err, null);
      } else {
        console.log("update: ", res);
        result(null, res);
      }})}

// (error, res) => {
//   if (error){
//     return console.error(error.message);
//   }
//   console.log('Rows affected:', res.affectedRows);
// });
//   //);
// };
// productObject.update = function (id, productObject, result) {

//   console.log("===========UPDATEFIRST=============");
//   console.log(productObject);
//   (productObject.date_created = new Date()), console.log(productObject);
//   console.log("===========UPDATE=SECOND============");
//   db.query(
//     "UPDATE product SET date_created=?, description=?, image_url=?,active=?," +
//       " name=?, sku=?, unit_price=?, units_in_stock=?, category_id=? WHERE id=?",
//     [
//       productObject.date_created,
//       productObject.description,
//       productObject.image_url,
//       productObject.active, 
//       productObject.name,
//       productObject.sku,
//       productObject.unit_price,
//       productObject.units_in_stock,
//       productObject.category_id,
//       id,
//     ],
//     function (err, res) {
//       if (err) {
//         console.log("error", err);
//         result(err, null);
//       } else {
//         console.log("update: ", res);
//         result(null, res);
//       }
//     }
//   );
// };


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
