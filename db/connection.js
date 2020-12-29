const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_trackerdb",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadID);
});

module.exports = connection;