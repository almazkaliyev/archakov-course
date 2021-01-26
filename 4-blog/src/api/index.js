import axios from './axios';

export const fetchPosts = async () => {
  const { data } = await axios.get('posts');
  return data;
};

export const fetchPostsByTitle = async (title) => {
  const { data } = await axios.get(`posts?title=${title}`);
  return data;
};

export const fetchPostById = async (id) => {
  const { data } = await axios.get(`posts/${id}`);
  return data;
};

export const fetchCommentsByPostId = async (id) => {
  const { data } = await axios.get(`posts/${id}/comments`);
  return data;
};

export const createComment = async (postId, text) => {
  const { data } = await axios.post(`posts/${postId}/comments`, { text });
  return data;
};

export const createPost = async (title, text) => {
  const { data } = await axios.post(`posts`, { title, text });
  return data;
};
