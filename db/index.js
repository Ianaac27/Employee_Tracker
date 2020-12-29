const connection = require("./connection");

module.exports = {
//View Tables    
getEmployees() {
    return connection.query("SELECT * FROM employee");
},

getDepartments() {
    return connection.query("SELECT * FROM department");
},

getRoles() {
    return connection.query("SELECT * FROM role");
},

//Add Data
getAddDepartment(res) {
    return connection.query("INSERT INTO department SET ?",
        {
          name: res.name,
        }
    )
},
getAddRole(res) {
    return connection.query("INSERT INTO role SET ?",
        {
          department_id: res.department_id,
          title: res.title,
          salary: res.salary 
        }
    )
}
 

// getUpdateRole() {
    
// }
};
