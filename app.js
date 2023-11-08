const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
const ejs = require("ejs");
const Post = require("./models/Post");

const app = express();

mongoose.connect(
  "mongodb://127.0.0.1:27017/cleanblog-test-db",
  console.log("db'ye bağlandı")
);
//template engin
app.set("view engine", "ejs");

//middleWare

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes

app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

app.post("/posts", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalıştı...`);
});
