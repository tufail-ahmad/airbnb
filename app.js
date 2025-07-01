// Core Module
const http = require("http");

// External Module
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
