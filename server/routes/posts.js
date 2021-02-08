const router = require("express").Router();
const { getPosts, createPost, updatePost } = require("../controllers/Post");

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

module.exports = router;
