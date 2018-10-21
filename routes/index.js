const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.render("index", { title: "login system", username: "Mark Moo" })
);

module.exports = router;
