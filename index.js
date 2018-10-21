const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const index = require("./routes/index");

const app = express();

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "hbs");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./public")));

mongoose.connect(
  "mongodb://markmoo:China17642019320@ds129801.mlab.com:29801/react_native_node",
  { useNewUrlParser: true }
);

app.use("/", index);

require("./routes/Router")(app);

const PORT = 3000;
app.listen(PORT, () => console.log(PORT));

module.exports = app;
