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
        "View employees by department",
        "View employees by manager",
        "View employees by role",
        "View budget by department",
        "Add employee",
        "Remove employee",
        "Update employee role",
        "Update employee manager"
      ]
    })
    .then(function(res) {
        switch (res.main) {
            case "View all employees":
                employeeAll();
                return;

            case "View employees by department":
                employeeDepartment();
                return;

            case "View employees by manager":
                employeeManager();
                return;

            case "View employees by role":
                employeeRole();
                return;

            case "View budget by department":
                departmentBudget();
                return;

            case "Add employee":
                addEmployee();
                return;

            case "Remove employee":
                removeEmployee();
                return;
            
            case "Update employee role":
                updateRole();
                return;
            
            case "Update employee manager":
                updateManager();
                return;      
                
            default:
                connection.end();
        }
    });
}

function employeeAll() {
db.getEmployeeAll().then((results) => {
    console.table(results);
    runMain();
});
}

function employeeDepartment() {
    db.getEmployeeAll().then((results) => {
        console.table(results);
        runMain();
});
}

function employeeManager() {
    db.getEmployeeManager().then((results) => {
        console.table(results);
        runMain();
});
}

function employeeRole() {
    db.getEmployeeRole().then((results) => {
        console.table(results);
        runMain();
});
}

function departmentBudget() {
    db.getDepartmentBudget().then((results) => {
        console.table(results);
        runMain();
});
}

function addEmployee() {
    db.getAddEmployee().then((results) => {
        console.table(results);
        runMain();
});
}

function removeEmployee() {
    db.getRemoveEmployee().then((results) => {
        console.table(results);
        runMain();
});
}

function updateRole() {
    db.getUpdateRole().then((results) => {
        console.table(results);
        runMain();
});
}

function updateManager() {
    db.getUpdateManager().then((results) => {
        console.table(results);
        runMain();
});
}

runMain();