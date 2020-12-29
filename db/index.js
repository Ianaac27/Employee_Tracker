const connection = require("./connection");

module.exports = {
getEmployeeAll() {
    //innerjoin
    return connection.query("SELECT * FROM employee")
}


//add all function from
};
