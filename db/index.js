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
getAddEmployee(res3) {
    return connection.query("INSERT INTO employee SET ?",
        {
          first_name: res3.first_name,
          last_name: res3.last_name,
          role_id: res3.role_id,
          manager_id: res3.manager_id
        }
    )
},

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
