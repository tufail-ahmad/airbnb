// Core Module
const path = require("path");

// External Module
const express = require("express");
const userRouter = express.Router();

// Internal Module
const rootdir = require("../utils/path");

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "index.html"));
});

module.exports = userRouter;
