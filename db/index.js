const connection = require("./connection");

module.exports = {
getEmployees() {
    return connection.query("SELECT * FROM employee")
},

getDepartments() {
    return connection.query("SELECT * FROM employee")
},

getRoles() {
    return connection.query("SELECT * FROM employee")
}

//add all function from
};
