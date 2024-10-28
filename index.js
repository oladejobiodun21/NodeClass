const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const port = 5005;

const name = "Ade";

app.get("", (req, res) => {
  res.render("index", { name });
});

app.listen(port, () => {
  console.log("app is running on", port);
});
