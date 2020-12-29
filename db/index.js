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
    return connection.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id AS manager FROM employee INNER JOIN role ON employee.role_id=role.id INNER JOIN department ON role.department_id=department.id ORDER BY employee.id ASC;");
},

getRolesJoin() {
    return connection.query("SELECT role.id, role.title, role.salary, department.name AS department FROM role INNER JOIN department ON role.department_id=department.id ORDER BY role.id ASC;");
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
 
//Update
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
};
