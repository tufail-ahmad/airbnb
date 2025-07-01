// Core Module
const http = require("http");
const path = require("path");

// External Module
const express = require("express");

// Internal Module
const router = require("./routes/router");
const rootdir = require("./utils/path");

const app = express();

app.use(router);

app.use(express.static(path.join(rootdir, "public")));

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
