import axios from "axios";

const url = "https://gallery-q.herokuapp.com/posts";

export const fecthPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedpost) =>
  axios.patch(`${url}/${id}`, updatedpost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
