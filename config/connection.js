const mysql = require("mysql");

let connection;
// Set up for heroku deployment

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "burgers_db",
  });
}

// make connection
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id: ${connection.threadId}`);
});

// export connection for ORM to use
module.exports = connection;
