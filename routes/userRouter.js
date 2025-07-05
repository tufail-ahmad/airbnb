// External Module
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.render("index");
});

userRouter.get("/listings", (req, res, next) => {
  res.render("store/home-list");
});

userRouter.get("/favourites", (req, res, next) => {
  res.render("store/favourite");
});

userRouter.get("/bookings", (req, res, next) => {
  res.render("store/bookings");
});

module.exports = userRouter;
