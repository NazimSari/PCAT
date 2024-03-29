const express = require("express");
const mongoose = require("mongoose");

const ejs = require("ejs");
const methodOverride = require("method-override");

const postController = require("./controllers/postControllers");
const pageController = require("./controllers/pageController");

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
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//routes

app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.post("/posts", postController.createPost);
app.put("/posts/:id", postController.updatePost);
app.delete("/posts/:id", postController.deletePost);

app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);
app.get("/posts/edit_post/:id", pageController.getEditPage);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalıştı...`);
});
