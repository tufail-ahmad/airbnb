// Core Module
const http = require("http");
const path = require("path");

// External Module
const express = require("express");

// Internal Module
const rootdir = require("./utils/path");
const userRouter = require("./routes/userRouter");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(userRouter);

app.use(express.static(path.join(rootdir, "public")));

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
