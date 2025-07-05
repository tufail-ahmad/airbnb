// Core Module
const http = require("http");
const path = require("path");

// External Module
const express = require("express");

// Internal Module
const rootdir = require("./utils/path");
const hostRouter = require("./routes/hostRouter");
const userRouter = require("./routes/userRouter");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).render("404");
});

app.use(express.static(path.join(rootdir, "public")));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
