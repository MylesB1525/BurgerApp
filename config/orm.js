const connection = require("../config/connection");

// Exports object for all SQL queries
const orm = {
  // Helper functions for sql syntax
  selectAll: (table, cb) => {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  // insertOne (String,Array,Array,Function)
  insertOne: (table, columns, values, cb) => {
    let queryString = "INSERT INTO ??(??) VALUE (?)";
    connection.query(queryString, [table, columns, values], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  // updateone( String, Object, String, Function)
  updateOne: (table, column, value, whereColumn, whereValue, cb) => {
    let queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(
      queryString,
      [table, column, value, whereColumn, whereValue],
      (err, result) => {
        if (err) throw err;
        cb(result);
      }
    );
  },
};

module.exports = orm;
