const express = require("express");
const mysqlConnection = require("../connection");
const router = express.Router();

router.get("/", (req, res)=>{
    mysqlConnection.query("INSERT INTO `details` (`email`, `password`) VALUES ('qwweqqw', 'qweqwe')", (err,rows,fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else
        {
            console.log(err);
        }
    });
});

module.exports = router;