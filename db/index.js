const connection = require("./connection");

module.exports = {
getDepartments() {
    return connection.query("SELECT * FROM departments")
}

};

//All functions go here