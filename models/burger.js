const orm = require("../config/orm");

const burger = {
  all(cb) {
    // Get all burgers
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  add(value, cb) {
    orm.insertOne("burgers", "burger_name", value, (res) => {
      cb(res);
    });
  },
  update(id, cb) {
    // Devour a burger
    orm.updateOne("burgers", "devoured", "1", "id", id, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;
