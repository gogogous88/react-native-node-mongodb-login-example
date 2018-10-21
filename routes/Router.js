const express = require("express");
const {
  authController,
  loginController
} = require("../controllers/authController");

module.exports = app => {
  const apiRoutes = express.Router();
  const authRoutes = express.Router(); //step 1.
  const userRoutes = express.Router(); //step 2.

  //step 1. user authentication

  apiRoutes.use("/auth", authRoutes);

  authRoutes.post("/register", authController);

  authRoutes.post("/login", loginController);

  //step 2. what after user is logged in?

  app.use("/api", apiRoutes);
};
