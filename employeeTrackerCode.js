const mysql = require("mysql");
const inquirer = require("inquirer");

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
    runMain();
});

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
                break;

            case "View employees by department":
                employeeDepartment();
                break;

            case "View employees by manager":
                employeeManager();
                break;

            case "View employees by role":
                employeeRole();
                break;

            case "View budget by department":
                departmentBudget();
                break;

            case "Add employee":
                addEmployee();
                break;
            case "Remove employee":
                removeEmployee();
                break;
            
            case "Update employee role":
                updateRole();
                break;
            
            case "Update employee manager":
                updateManager();
                break;        
        }
      });
}