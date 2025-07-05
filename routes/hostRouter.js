// External Module
const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/host-home-list", (req, res, next) => {
  res.render("host/host-home-list");
});

hostRouter.get("/add-home", (req, res, next) => {
  res.render("host/add-home");
});

module.exports = hostRouter;
