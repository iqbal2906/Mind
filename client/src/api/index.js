import axios from "axios";

const url = "http://localhost:5000/posts";

export const fecthPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedpost) =>
  axios.patch(`${url}/${id}`, updatedpost);
