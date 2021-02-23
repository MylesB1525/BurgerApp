const router = require("express").Router();
const burger = require("../models/burger");

router.post("/api/burger", (req, response) => {
  const newBurgerName = req.body.name;
  burger.add(newBurgerName, (result) => {
    if (result) {
      response.sendStatus(200).end();
    } else {
      response.sendStatus(400).end();
    }
  });
});

router.get("/", (req, response) => {
  burger.all((data) => {
    // Object for handlebars
    const hbsObject = { burgers: data };
    response.render("index", hbsObject);
  });
});

router.put("/api/burger/:id", (req, response) => {
  const id = req.params.id;
  burger.update(id, (result) => {
    if (result) {
      response.sendStatus(200).end();
    } else {
      console.log(`PUT Error`);
      response.sendStatus(400).end();
    }
  });
});

module.exports = router;
