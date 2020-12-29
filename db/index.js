const connection = require("./connection");

module.exports = {
getViewEmployees() {
    //innerjoin
    return connection.query("SELECT * FROM employee")
}


//add all function from
};
