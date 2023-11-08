// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// mongoose.connect(
//   "mongodb://127.0.0.1:27017/pcat-test-db",
//   console.log("db'ye bağlandı")
// );

//create schema

// const PostSchema = new mongoose.Schema({
//   title: String,
//   detail: String,
// });

// const Post = mongoose.model("Post", PostSchema);

// Post.create({
//   title: "Post Title ",
//   detail: "Post description 2 lorem ipsum",
// });

// Post.find().then((data) => {
//   console.log(data);
// });

// const id = "654b5fbc4af0f9c75df4301c";

// Post.findByIdAndUpdate(
//   id,
//   {
//     title: "title şekli updated",
//   },
//   {
//     new: true,
//   }
// ).then((data) => {
//   console.log(data);
// });
