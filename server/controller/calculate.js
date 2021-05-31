const express = require("express");
const calculate = require("../models/calculate");

const router = express.Router();

router
  .get("/", (req, res, next) => {
    res.send(req.body.weight);
  })
  .get("/male", (req, res, next) => {
    calculate
      .maleBMR(
        req.body.weight,
        req.body.height,
        req.body.age,
        req.body.multiplier
      )
      .then((x) => res.send(x + ""))
      .catch(next);
  });

module.exports = router;
