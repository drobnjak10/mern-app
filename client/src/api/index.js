import axios from 'axios'
const url = 'http://localhost:5000/api/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (data) => axios.post(`${url}/create`, data)

export const deletePost = (id) => axios.delete(`${url}/delete/${id}`)