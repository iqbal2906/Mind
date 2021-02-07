const router = require("express").Router();
const { getPosts, createPost } = require("../controllers/Post");

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router;
