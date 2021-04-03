const POSTS = require("../models/POSTS");
const { isEmptyObj } = require("../utils/helps");
function getAllPosts(req, res) {
  res.status(200).json({
    isSuccess: true,
    message: "successfully",
    data: POSTS,
  });
}

function getPostById(req, res) {
  const { id } = req.params;
  const post = POSTS.find((p) => p.id === id);
  if (!post) {
    return res.status(404).json({
      isSuccess: false,
      message: "not found post",
      data: [],
    });
  }

  return res.status(200).json({
    isSuccess: true,
    message: "successfully",
    data: post,
  });
}
function createPost(req, res) {
  console.log(isEmptyObj(req.body));
  if (!isEmptyObj(req.body)) {
    POSTS.push({ id: POSTS.length, ...req.body });
    return res.status(200).json({
      isSuccess: true,
      message: "successfully",
      data: req.body,
    });
  }
  return res.json({
    isSuccess: false,
    message: "post is required",
    data: [],
  });
}

function updatePost(req, res) {
  const { id } = req.params;
  const index = POSTS.findIndex((p) => p.id === id);
  if (index == -1) {
    return res.json({
      isSuccess: false,
      message: "post is required",
      data: [],
    });
  }

  POSTS[index] = { id, ...req.body };
  return res.status(200).json({
    isSuccess: true,
    message: "successfully",
    data: { id, ...req.body },
  });
}
function deletePost(req, res) {
  const { id } = req.params;
  const index = POSTS.findIndex((p) => p.id === id);
  if (index == -1) {
    return res.json({
      isSuccess: false,
      message: "post is required",
      data: [],
    });
  }
  POSTS.splice(index, 1);
  return res.status(200).json({
    isSuccess: true,
    message: "successfully",
    data: POSTS,
  });
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
