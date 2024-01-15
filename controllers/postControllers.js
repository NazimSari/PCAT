const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  const page = req.query.page || 1;
  const postPerPage = 2;
  const totalPosts = await Post.find().countDocuments();

  const posts = await Post.find({})
    .sort("-dateCreated")
    .skip((page - 1) * postPerPage)
    .limit(postPerPage);
  res.render("index", {
    posts: posts,
    current: page,
    pages: Math.ceil(totalPosts / postPerPage),
  });
};

const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
};

const createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

const updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  await post.deleteOne();
  res.redirect("/");
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
