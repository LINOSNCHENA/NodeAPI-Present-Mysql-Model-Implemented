require('./connectsAdmin');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({ origin: "*" }));

connection.connect(function (err) {
    if (err) throw err;
    console.log('You are connected on SERVER B');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//////////////////////////////////////////////////////////////////////// BOOKINGS
app.post('/full/accounts', function (req, res) {
    let name = req.body.name;
    let dept = req.body.dept;
    let post = req.body.post;
    let salary = req.body.salary;
    let status = req.body.status;
    let createdat = new Date().toISOString().substring(0,19).replace('T',' ');
    connection.query("INSERT INTO `bank3`( `name`, `dept`, `post`, `salary`,`status`, `createdat`) VALUES('" + name + "','" + dept + "','" + post + "','" + salary + "','" + status+ "','" + createdat + "')", function (err, results) {
        if (err) throw err;
        res.send({ "msg": "Successfully Inserted Booking" });
        console.log({ "msg": "Successfully Inserted Booking" });
    });
});

app.get('/full/accounts', function (req, res) {
    connection.query('SELECT * FROM `bank3`', function (err, results) {
        if (err) throw err;
        res.send(results);
        console.log({ "msg":"Successfully many Selected Booking!" });
    });
});


app.get('/full/accounts/:id', function (req, res) {
    let id = req.params.id;
    connection.query("select *  FROM `bank3` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
        console.log({ "msg":"Successfully Identified Booking!" });
    });

});

app.post('/full/accounts/:id', function (req, res) {
    let id = req.body.id;
    let name = req.body.name;
    let dept = req.body.dept;
    let post = req.body.post;
    let salary = req.body.salary;
    let status = req.body.status;
    let createdat = new Date().toISOString().substring(0,19).replace('T',' ');
    connection.query("UPDATE `bank3` SET `name`= '" + name + "', `dept` ='" + dept + "',`post` ='" + post + "',salary='" + salary+ "',status='" + status + "',createdat='"+ createdat + "'  where `id`= " + id, function (err, results) {
             if (err) throw err;if (err) throw err;
        res.send({ "msg": "Successfully Updated Booking" });
        console.log({ "msg":"Successfully Updated Booking!" });
     //   console.log("Successfully222222222 Updated Booking!");
    });
});

app.get('/full/accounts/:id', function (req, res) {
    let id = req.params.id;
    connection.query("Delete  FROM `bank3` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
        console.log({ "msg":"Successfully Deleted Booking!" });
    });
});
/////////////////////////////////////////////////////////////////////////////// EMPLOYEES
app.post('/einsertData', function (req, res) {
    let name = req.body.name;
    let office = req.body.office;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let createdat = new Date().toISOString().substring(0,19).replace('T',' ');
    connection.query("INSERT INTO `employees`( `name`, `mobile`, `office`, `email`, `createdat`) VALUES('" + name + "','" + mobile + "','"+ office + "','" + email + "','" + createdat + "')", function (err, results) {

        if (err) throw err;
        res.send({ "msg": "Successfully Inserted" });
    });
});

app.get('/egetdata', function (req, res) {
    connection.query('SELECT * FROM `employees`', function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});


app.get('/eeditData/:id', function (req, res) {
    let id = req.params.id;
    connection.query("select *  FROM `employees` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
    });

});

app.post('/eupdateData/:id', function (req, res) {
    let id = req.body.id;
    let name = req.body.name;
    let mobile = req.body.mobile;
    let office = req.body.office;
    let email = req.body.email;
    let createdat = new Date().toISOString().substring(0,19).replace('T',' ');
    connection.query("UPDATE `employees` SET `name`= '" + name + "', `mobile` = '" + mobile + "',`office` ='" + office + "',email='" + email + "',createdat='" + createdat + "'  where `id`= " + id, function (err, results) {
        if (err) throw err;
        res.send({ "msg": "Successfully Updated" });
    });
});

app.get('/edeletedata/:id', function (req, res) {
    let id = req.params.id;
    connection.query("Delete  FROM `employees` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});
////////////////////////////////////////////////////////////////////////////////// WORKERS


app.get('/wgetdata', function (req, res) {
    connection.query('SELECT * FROM `workers`', function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});


app.get('/weditData/:id', function (req, res) {
    let id = req.params.id;
    connection.query("select *  FROM `workers` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
    });

});



app.get('/wdeletedata/:id', function (req, res) {
    let id = req.params.id;
    connection.query("Delete  FROM `workers` where id =" + id, function (err, results) {
        if (err) throw err;
        res.send(results);
    });
});


const PORT1 = process.env.PORT1 || 4210;
app.listen(PORT1, () => console.log(`Server2 is listening on port B ${PORT1}`))
