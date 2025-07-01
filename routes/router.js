// core modules
const path = require("path");

// external modules
const express = require("express");

// internal modules
const router = express.Router();
const rootdir = require("../utils/path");

router.get("/", (req, res) => {
  res.sendFile(path.join(rootdir, "views/index.html"));
});

module.exports = router;
