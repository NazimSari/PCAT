const Post = require("../models/Post");

const getAboutPage = (req, res) => {
  res.render("about");
};

const getAddPage = (req, res) => {
  res.render("add_post");
};

const getEditPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render("edit_post", {
    post,
  });
};

module.exports = {
  getAboutPage,
  getAddPage,
  getEditPage,
};
