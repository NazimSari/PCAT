const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

//template engin
app.set("view engine", "ejs");

//middleWare

app.use(express.static("public"));

//routes

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "views/index.html"));
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalıştı...`);
});
