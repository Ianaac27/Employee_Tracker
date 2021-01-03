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

//View Joined Tables

getEmployeesJoin() {
    return connection.query("SELECT e.id, e.first_name, e.last_name, role.title, department.name, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager FROM employee e INNER JOIN role ON e.role_id=role.id INNER JOIN department ON role.department_id=department.id LEFT JOIN employee m ON m.id=e.manager_id ORDER BY e.id ASC;");
},

getRolesJoin() {
    return connection.query("SELECT role.id, role.title, role.salary, department.name AS department FROM role INNER JOIN department ON role.department_id=department.id ORDER BY role.id ASC;");
},

getManagersJoin() {
    return connection.query("SELECT m.id AS manager_id, CONCAT(m.first_name, ' ', m.last_name) AS manager, e.id AS employee_id, e.first_name, e.last_name, role.title FROM employee e INNER JOIN role ON e.role_id=role.id LEFT JOIN employee m ON m.id=e.manager_id ORDER BY m.last_name ASC;");
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
},
 
//Update Data
getUpdateRole(res3) {
    return connection.query("UPDATE employee SET ? WHERE ?",
        [{
        role_id: res3.role_id
        },
        {  
        id: res3.employee_id,
        }]
        )
},

getUpdateManager(res) {
    return connection.query("UPDATE employee SET ? WHERE ?",
        [{
        manager_id: res.manager_id
        },
        {  
        id: res.employee_id,
        }]
        )
},


//Remove Data
getRemoveEmployee(res) {
    return connection.query("DELETE FROM employee WHERE ?",
        {
        id: res.name,
        }
    )
},

getRemoveDepartment(res) {
    return connection.query("DELETE FROM department WHERE ?",
        {
          id: res.name,
        }
    )
},

getRemoveRole(res) {
    return connection.query("DELETE FROM role WHERE ?",
        {
          id: res.name,
        }
    )
} 
};
