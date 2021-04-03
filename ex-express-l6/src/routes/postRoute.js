const route = require("express").Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

route.get("/", getAllPosts);
route.get("/:id", getPostById);
route.post("/", createPost);
route.put("/:id", updatePost);
route.delete("/:id", deletePost);

module.exports = route;
