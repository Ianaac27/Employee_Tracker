const inquirer = require("inquirer");

const db = require("./db");
const connection = require("./db/connection");

function runMain() {
    inquirer
    .prompt({
      name: "main",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all departments",
        "View all roles",
        // "View employees by manager",
        // "View budget by department",
        "Add employee",
        "Add department",
        "Add role",
        "Remove employee",
        "Remove department",
        // "Remove role",
        "Update employee role",
        // "Update employee manager",
        "Quit"
      ]
    })
    .then(function(res) {
        switch (res.main) {
            case "View all employees":
                viewEmployees();
                return;

            case "View all departments":
                viewDepartments();
                return;

            case "View all roles":
                viewRoles();
                return;    

            // case "View employees by manager":
            //     employeeManager();
            //     return;

            // case "View budget by department":
            //     departmentBudget();
            //     return;

            case "Add employee":
                addEmployee();
                return;

            case "Add department":
                addDepartment();
                return;
                
            case "Add role":
                addRole();
                return;

            case "Remove employee":
                removeEmployee();
                return;

            case "Remove department":
                removeDepartment();
                return;
            
            // case "Remove role":
            //     removeRole();
            //     return;    
            
            case "Update employee role":
                updateRole();
                return;
            
            // case "Update employee manager":
            //     updateManager();
            //     return;      
                
            default:
                connection.end();
        }
    });
}

function viewEmployees() {
db.getEmployeesJoin().then((res) => {
    console.table(res);
    runMain();
});
}

function viewDepartments() {
    db.getDepartments().then((res) => {
        console.table(res);
        runMain();
});
}

function viewRoles() {
    db.getRolesJoin().then((res) => {
        console.table(res);
        runMain();
});
}

// function employeeManager() {
//     db.getEmployeeManager().then((results) => {
//         console.table(results);
//         runMain();
// });
// }

// function departmentBudget() {
//     db.getDepartmentBudget().then((results) => {
//         console.table(results);
//         runMain();
// });
// }

function addEmployee() {
    db.getRoles().then((role) => {

        inquirer
            .prompt([
                {
                name: "first_name",
                type: "input",
                message: "What is the new employee's first name?"
                }
                ,
                {
                name: "last_name",
                type: "input",
                message: "What is their last name?",
                },
                {
                name: "role_id",
                type: "list",
                message: "Which title do they hold?",
                choices: role.map((role) => ({
                    value: role.id,
                    name: role.title
                }))
                }
            ]).then((res1) => {

                db.getEmployees().then((employee) =>{

                inquirer
                .prompt([
                {
                    name: "manager_id",
                    type: "list",
                    message: "Who is their manager?",
                    choices: employee.map((employee) => ({
                        value: employee.id,
                        name: employee.first_name
                    }))
                }
                ]).then((res2, err) => {
           
                // console.log(res1, res2);

                let res3 = {
                    ...res1,
                    ...res2
                }

            db.getAddEmployee(res3);
                if (err) throw err;

                console.log("New employee successfully created!");
                runMain();
                })})
    })
    });
}

function addDepartment() {
        inquirer
            .prompt([
                {
                name: "name",
                type: "input",
                message: "What is the name of the department you would like to add?"
                }
            ]).then((res, err) => {

            db.getAddDepartment(res)
                if (err) throw err;
                
                console.log("New department successfully created!");
                runMain();
              });
    }

function addRole() {
    db.getDepartments().then((department) => {

        inquirer
            .prompt([
                
                {
                name: "department_id",
                type: "list",
                message: "Which department is this role for?",
                choices: department.map( (department) => ({
                    value: department.id,
                    name: department.name
                }))
                },
                {
                name: "title",
                type: "input",
                message: "What is the title of this role?"
                }
                ,
                {
                name: "salary",
                type: "input",
                message: "What is the salary of this role?",
                }
            ]).then((res, err) => {

            db.getAddRole(res);
                if (err) throw err;

                console.log("New role successfully created!");
                runMain();
              })
    });
    }

function removeEmployee() {
    db.getEmployees().then((employee) => {

        inquirer
          .prompt([
              {
              name: "name",
              type: "list",
              message: "Which employee would you like to delete?",
              choices: employee.map( (employee) => ({
                  value: employee.id,
                  name: employee.first_name
              }))
              }
          ]).then((res, err) => {
      // console.log(res);
      
          db.getRemoveEmployee(res)
              if (err) throw err;
              
              console.log("Employee successfully removed");
              runMain();
          })
      });
}

function removeDepartment() {
db.getDepartments().then((department) => {

  inquirer
    .prompt([
        {
        name: "name",
        type: "list",
        message: "Which department would you like to delete?",
        choices: department.map( (department) => ({
            value: department.id,
            name: department.name
        }))
        }
    ]).then((res, err) => {
// console.log(res);

    db.getRemoveDepartment(res)
        if (err) throw err;
        
        console.log("Department successfully removed");
        runMain();
    })
});
}

// function removeRole() {
//     db.getRemoveEmployee().then((results) => {
//         console.table(results);
//         runMain();
// });
// }

function updateRole() {
    db.getEmployees().then((employee) => {

        inquirer
            .prompt([
                {
                name: "employee_id",
                type: "list",
                message: "Which employee do you want to update?",
                choices: employee.map((employee) => ({
                    value: employee.id,
                    name: employee.first_name
                }))
                },
            ]).then((res1) => {

            db.getRoles().then((role) =>{

            inquirer
            .prompt([
                {
                name: "role_id",
                type: "list",
                message: "What is their updated title?",
                choices: role.map((role) => ({
                    value: role.id,
                    name: role.title
                }))
                }
            ]).then((res2, err) => {
           
                // console.log(res1, res2);

                let res3 = {
                    ...res1,
                    ...res2
                }

                // console.log(res3);

            db.getUpdateRole(res3);
                if (err) throw err;

                console.log("Employee role updated!");
                runMain();
                })})
})
});
}

// function updateManager() {
//     db.getUpdateManager().then((results) => {
//         console.table(results);
//         runMain();
// });
// }

runMain();