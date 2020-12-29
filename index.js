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
        // "Remove employee",
        // "Remove department",
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

            // case "Remove employee":
            //     removeEmployee();
            //     return;

            // case "Remove department":
            //     removeDepartment();
            //     return;
            
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
db.getEmployees().then((results) => {
    console.table(results);
    runMain();
});
}

function viewDepartments() {
    db.getDepartments().then((results) => {
        console.table(results);
        runMain();
});
}

function viewRoles() {
    db.getRoles().then((results) => {
        console.table(results);
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
    db.getAddEmployee().then((results) => {
        console.table(results);
        runMain();
});
}

function addDepartment() {
    // db.getDepartments().then((department) => {

        inquirer
            .prompt([
                {
                name: "name",
                type: "input",
                message: "What is the title of the department you would like to add?"
                }
            ]).then((res, err) => {

            db.getAddDepartment(res)
                if (err) throw err;
                
                console.log("New department successfully created!");
                runMain();
              })
// })
;
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

// function removeEmployee() {
//     db.getRemoveEmployee().then((results) => {
//         console.table(results);
//         runMain();
// });
// }

// function removeDepartment() {
//     db.getRemoveEmployee().then((results) => {
//         console.table(results);
//         runMain();
// });
// }

// function removeRole() {
//     db.getRemoveEmployee().then((results) => {
//         console.table(results);
//         runMain();
// });
// }

// function updateRole() {
//     db.getDepartments().then((department) => {

//         inquirer
//             .prompt({
//                 name: "department_id",
//                 type: "list",
//                 message: "Which department is this role for?",
//                 choices: department.map( (department) => ({
//                     value: department.id,
//                     name: department.name
//                 }))
//             }).then(res => {

//         console.log(res);

//             })
//         // console.table(results);
//         // runMain();
// });
// }

// function updateManager() {
//     db.getUpdateManager().then((results) => {
//         console.table(results);
//         runMain();
// });
// }

runMain();