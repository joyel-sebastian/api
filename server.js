const mysql = require("mysql");
const express = require("express");
const mysqlConnection = require("./connection");
var app = express();

const bodyparser = require("body-parser");

const PeopleRoutes = require("./routes/people");
app.use(bodyparser.json()); 
app.use("/people", PeopleRoutes);



app.listen(3001, ()=>console.log("Express Server is running at Port No : 3001"));

