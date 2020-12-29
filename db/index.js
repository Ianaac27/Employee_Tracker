const connection = require("./connection");

module.exports = {
getEmployees() {
    return connection.query("SELECT * FROM employee")
},

getDepartments() {
    return connection.query("SELECT * FROM department")
},

getRoles() {
    return connection.query("SELECT * FROM role")
},

// getAddRole()
// getUpdateRole() {
    
// }
//add all function from
};
