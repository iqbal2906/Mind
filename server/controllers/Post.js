const PostMessage = require("../models/postMessage");

class Post {
  static async getPost(req, res) {
    try {
      const postMessages = await PostMessage.find();
      res.status(200).json(postMessages);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async createPost(req, res) {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
      await newPost.save();

      res.status(201).json(newPost);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = Post;
