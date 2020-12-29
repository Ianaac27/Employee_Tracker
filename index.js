const db = require("./db");

db.getDepartments().then((results) => {
    console.log(results);
})