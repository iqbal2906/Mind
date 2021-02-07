const router = require("express").Router();
const { getPost, createPost } = require("../controllers/Post");

router.get("/", getPost);
router.post("/", createPost);

module.exports = router;
