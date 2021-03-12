const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "sample",
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }
    else
    {
        console.log("Connection Failed \n Error :" + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mysqlConnection;

