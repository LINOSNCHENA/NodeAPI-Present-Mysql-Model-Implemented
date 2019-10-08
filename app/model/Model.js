'user strict';
var sql = require('./database.js');

var Employee = function(employee){
    this.name = employee.name;
    this.dept = employee.dept;
    this.post = employee.post;
    this.salary = employee.salary;
    this.status = employee.status;
    this.createdAt = new Date();
};

// http://localhost:2020/second                                       //  GET ONE  #1                       
Employee.getAll = function (result) {                                   
  sql.query("Select * from bank2", function (err, res) {
    if(err) { console.log("error: ", err);  result(null, err); }
      else   { console.log('employees : ', res);  result(null, res);   }
    });   
};

// http://localhost:2020/second/:id                                   // GET ONE  #2
Employee.getByTaskId = function (employeeX, result) {
sql.query("Select * from bank2 where id = ? ", employeeX, function (err, res) {          
    if(err) { console.log("error: ", err);    result(err, null);  }
      else { console.log('chosen employee : ',  res); result(null, res); }
    });   
};

// http://localhost:2020/second/:id                                  // DELETE ONE  #3
Employee.removeEmployee = function(id, result){
    sql.query("DELETE FROM bank2 WHERE id = ?", [id], function (err, res) {
      if(err) { console.log("error: ", err);   result(null, err);  }
        else{ console.log(res,'Employeed ID #',id,' has been deleted: '); 
        result(null, res);       }
     }); 
};

// http://localhost:2020/second/:id                                 // UPDATE ONE   #4
Employee.updateByTaskId = function(id, employee, result) {
    sql.query("UPDATE bank2 SET post=?,name=?,dept=?,salary=? WHERE id = ?",
     [employee.post,employee.name,employee.dept, employee.salary,id], function (err, res) {
      if(err) {  console.log("error: ", err);     result(null, err);   }
      else   { console.log('Employee ID # ',id,'has been updated: res ',id);  
      result(null, res);     }   
    }); 
  };

  // http://localhost:2020/second                                     // POST EMPLOYEE  #5
Employee.createEmployee = function (newEmployee, result) {    
    sql.query("INSERT INTO bank2 set ?", newEmployee, function (err, res) {
      if(err) {console.log("error: ", err);   result(err, null);  }
      else{ console.log('Employee ID #',res.insertId,' Has been created',res); 
      result(null, res.insertId); }
        });           
};

module.exports= Employee;